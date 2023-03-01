import { createSlice } from '@reduxjs/toolkit';
import {db} from '../firebase'
import {doc, setDoc, collection, addDoc} from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase'

const passwordDb = db.collection("PasswordData")
const [user] = useAuthState(auth);

const initialState = {
    title: "",
    passwordName: "",
    passwordValue: "",
    isPinned: false,
  };

  export const passwordSlice = createSlice({
    name: 'passwords',
    initialState,
    reducers: {
        createNewPassword: (state, action) => {
            passwordDb.add(action.payload).then(ref => {
                console.log("record added successfully")
            })
        }
    },
  });
  
  export const {addNewPassword} = passwordSlice.actions

  export default passwordSlice.reducer


  