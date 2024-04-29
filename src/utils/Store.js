import {configureStore} from '@reduxjs/toolkit';
import ShowHide from './ShowHide';
export const appStore=configureStore({
    reducer:{
        app:ShowHide

    }

})