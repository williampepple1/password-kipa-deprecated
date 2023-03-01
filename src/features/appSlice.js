import { createSlice } from '@reduxjs/toolkit';
import {db} from '../firebase'
import {doc, setDoc, updateDoc, deleteDoc, arrayUnion, arrayRemove} from 'firebase/firestore'



 