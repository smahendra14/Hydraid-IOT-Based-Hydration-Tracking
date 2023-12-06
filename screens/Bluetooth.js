import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, DeviceEventEmitter, SafeAreaView} from 'react-native';
import BleManager from 'react-native-ble-manager';

const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
const CHARACTERISTIC_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';

const Bluetooth = (props) => {
  const [isScanning, setIsScanning] = useState(false);
  const [devices, setDevices] = useState([]);


  useEffect(() => {
    BleManager.start({showAlert: false});

    const handleDiscoverPeripheral = device => {
      console.log('New device:', device.advertising.localName);
      if (
        device.advertising.localName != undefined &&
        device.advertising.localName &&
        (device.advertising.localName.includes('Long') ||
          device.advertising.localName.includes('ESP'))
      ) {
        setDevices(prevDevices => {
          // Check if the device is already in the list
          const deviceExists = prevDevices.some(
            existingDevice => existingDevice.id === device.id,
          );

          // If the device is not in the list, add it
          if (!deviceExists) {
            console.log(device);
            return [...prevDevices, device];
          }

          // If the device is already in the list, return the existing list
          return prevDevices;
        });
      }
    };

    DeviceEventEmitter.addListener(
      'BleManagerDiscoverPeripheral',
      handleDiscoverPeripheral,
    );

    return () => {
      DeviceEventEmitter.removeListener(
        'BleManagerDiscoverPeripheral',
        handleDiscoverPeripheral,
      );
    };
  }, []);

  const startScan = () => {
    if (!isScanning) {
      setIsScanning(true);
      devices.length = 0;
      BleManager.scan([], 5, true)
        .then(() => {
          console.log('Scanning...');
        })
        .catch(err => {
          console.error(err);
        });

      setTimeout(() => {
        setIsScanning(false);
      }, 5000);
    }
  };

  const connectToDevice = device => {
    BleManager.connect(device.id)
      .then(() => {
        console.log('Connected to ' + device.name);
        props.setConnectedDevice(device);
        props.setPID(device.id);
      })
      .catch(error => {
        console.log('Connection error', error);
      });
  };

  const disconnectFromDevice = () => {
    BleManager.disconnect(props.connectedDevice.id)
      .then(() => {
        console.log('Disconnected from ' + props.connectedDevice.name);
        props.setConnectedDevice(null);
      })
      .catch(error => {
        console.log('Disconnect error', error);
      });
  };

  // reads in the current reading to keep track of initial weight when full
  const calibrate = async (
    peripheralId,
    serviceUUID,
    characteristicUUID,
  ) => {
    try {
      await BleManager.retrieveServices(peripheralId);
      let message = await BleManager.read(
        peripheralId,
        serviceUUID,
        characteristicUUID,
      );
      const dataArray = message;
      const dataString = String.fromCharCode(...dataArray);
      // multiply by -1.04 to account for minor inaccuracies in the load sensor
      const num = parseInt(dataString, 10) * -1.04;
      console.log('calibration constant: ', num);
      props.setCalibrationConstant(num);
      // keep track of the weight of a full water bottle 
      props.setSensorData(num);
    } catch (error) {
      console.error('Error reading characteristic:', error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {props.connectedDevice ? (
        <>
          <TouchableOpacity
            onPress={() =>
                calibrate(props.PID, SERVICE_UUID, CHARACTERISTIC_UUID)
            }
            style={{
                backgroundColor: 'blue',
                padding: 10,
                borderRadius: 5,
                marginBottom: 5,
            }}>
            <Text> Calibrate Device </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={disconnectFromDevice}
            style={{
              backgroundColor: 'red',
              padding: 10,
              borderRadius: 5,
              marginBottom: 5,
            }}>
            <Text>Disconnect from {props.connectedDevice.advertising.localName}</Text>
          </TouchableOpacity>
          <Text>Sensor Data: {props.sensorData}</Text>
          <TouchableOpacity
            onPress={() => props.setPage('MainScreen1')}
            style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 5,
                marginBottom: 5,
            }}
          >
            <Text> Go to Main Screen </Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            onPress={startScan}
            style={{
              backgroundColor: 'blue',
              padding: 20,
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <Text style={{color: 'white'}}>
              {isScanning ? 'Scanning...' : 'Scan for ESP32 Devices'}
            </Text>
          </TouchableOpacity>
          {devices.map(device => (
            <TouchableOpacity
              key={device.id}
              onPress={() => connectToDevice(device)}
              style={{
                backgroundColor: 'green',
                padding: 10,
                borderRadius: 5,
                marginBottom: 5,
              }}>
              <Text style={{color: 'white'}}>
                {device.advertising.localName || device.id}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      )}
    </View>
  );
};

export default Bluetooth;