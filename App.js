import {useState, useEffect} from 'react';
import Login from './screens/Login'
import HomePage from "./screens/HomePage"
import Demographics from "./screens/Demographics"
import OptionalDemographics from "./screens/OptionalDemographics"
import MainScreen1 from "./screens/MainScreen1"
import Bluetooth from "./screens/Bluetooth"
import Calendar from "./screens/Calendar"
import BleManager from 'react-native-ble-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
const CHARACTERISTIC_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';

export default function App() {
    const [page, setPage] = useState("HomePage")
    const [gender, setGender] = useState("");
    const [weight, setWeight] = useState(0);
    const [connectedDevice, setConnectedDevice] = useState(null);
    const [PID, setPID] = useState(null); 
    const [location, setLocation] = useState("");
    const [sensorData, setSensorData] = useState("-10000");
    const [calibrationConstant, setCalibrationConstant] = useState(null);
    // const [newSensorData, setNewSensorData] = useState(null);
    const [totalAmountDrank, setTotalAmountDrank] = useState(0);
    const [exerciseAmount, setExerciseAmount] = useState(0);

    useEffect(() => {
        const loadValues = async() => {
            try {
                const storedGender = await AsyncStorage.getItem('@gender')
                const storedWeight = await AsyncStorage.getItem('@weight')
                const storedLocation = await AsyncStorage.getItem('@location')
                const storedAmountDrank = await AsyncStorage.getItem('@total-amount-drank')
                const storedCalibrationConstant = await AsyncStorage.getItem('@calibration-constant')
                
                
                if (storedGender !== null) {
                    setGender(storedGender);
                }
                if (storedWeight !== null) {
                    setWeight(storedWeight);
                } 
                if (storedLocation !== null) {
                    setLocation(storedLocation);
                } 
                if (storedAmountDrank !== null) {
                    setTotalAmountDrank(parseFloat(storedAmountDrank))
                }
               
            } catch (error) {
                console.error('Error fetching value from AsyncStorage:', error);
            }
        };
        loadValues();
    }, []);

    useEffect(() => {
        const readCharacteristic = async (
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
            const currentWeight = sensorData;
            const newWeight = parseInt(dataString, 10) * -1.04;
            // account for insignificant weight variations and only keep track of decreases in water level
            if ((newWeight < (currentWeight - 20)) && (newWeight > 450)) {
              console.log("old:");
              console.log(currentWeight);
              console.log("new:");
              console.log(newWeight);
              let currAmountDrank = totalAmountDrank;
              setTotalAmountDrank(currAmountDrank + (currentWeight - newWeight));
              setSensorData(newWeight);
            }
          } catch (error) {
            console.error('Error reading characteristic:', error);
          }
        }
        
        let interval = null
    
        if (connectedDevice && PID) {
          interval = setInterval(() => {
            readCharacteristic(PID, SERVICE_UUID, CHARACTERISTIC_UUID)
          }, 2000);
        }
      
        return () => {
          interval && clearInterval(interval)
        }
      }, [sensorData, connectedDevice, PID])

    useEffect(() => {
        async function writeAmountDrank() {
            try {
                await AsyncStorage.setItem('@total-amount-drank', totalAmountDrank.toString())
            } catch(e) {
                // save error
            }
        }
        writeAmountDrank()
    }, [totalAmountDrank])

    return (
        page === "Demographics" ?
        <Demographics weight={weight} setWeight={setWeight} page={page} setPage={setPage}
        exerciseAmount={exerciseAmount} setExerciseAmount={setExerciseAmount} gender={gender}
        location={location} setGender={setGender} setLocation={setLocation}/>  :
        page === "OptionalDemographics" ?
        <OptionalDemographics page={page} setPage={setPage}/> :
        page === "MainScreen1" ?
        <MainScreen1 weight={weight} page={page} setPage={setPage} gender={gender}
        sensorData={sensorData} setSensorData={setSensorData} calibrationConstant={calibrationConstant}
        totalAmountDrank={totalAmountDrank} setTotalAmountDrank={setTotalAmountDrank} exerciseAmount={exerciseAmount}/> :
        page === "Bluetooth" ?
        <Bluetooth page={page} setPage={setPage} sensorData={sensorData} setSensorData={setSensorData}
        calibrationConstant={calibrationConstant} setCalibrationConstant={setCalibrationConstant}
        PID={PID} setPID={setPID} setConnectedDevice={setConnectedDevice}  
        connectedDevice={connectedDevice} totalAmountDrank={totalAmountDrank} setTotalAmountDrank={setTotalAmountDrank}/> :
        page == "Calendar" ?
        <Calendar page={page} setPage={setPage}/> :
        page === "HomePage" ?
        <HomePage page={page} setPage={setPage}/> :
        page === "Login" ?
        <Login page={page} setPage={setPage}/> :
        <HomePage page={page} setPage={setPage}/>
    )
}