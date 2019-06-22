import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the myxkcd extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'myxkcd',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension myxkcd is activated!');
  }
};

export default extension;
