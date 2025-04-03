import { ui } from '../js/core/globals.js';

// assets
import '../css/modules/loading-mask.css';
import '../js/modules/loading-mask.js';

export default function LoadingMask(toggle: any) {
    ui.loadingMask.toggle(toggle);
}