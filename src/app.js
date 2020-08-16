import 'regenerator-runtime';
import './style/style.css';
import './script/component/nav-bar.js';
import './script/component/footer-credit.js';
import main from './script/main/main';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

OfflinePluginRuntime.install();

main();
