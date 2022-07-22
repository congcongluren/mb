import React from "react";
import ReactDom from 'react-dom';
import { log } from '@utils/index';

import App from "./src/app";

import './src/style/index.scss';

ReactDom.render(<App/>, document.getElementById('app'));