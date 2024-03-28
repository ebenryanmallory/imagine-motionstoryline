import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import './index.css'

import { upload } from './universal/upload';
import { navigation } from './universal/navigation';
import { onChange, updateMainPanel } from '../store';

import { imageTextInput } from './image/imageTextInput';
import { videoOptions } from './video/vidoeOptions';

const setupEventListeners = () => {
    const mainArea = document.querySelector('#main-area');
    const menuItems = document.querySelectorAll('sl-menu-item');
    menuItems.forEach(item => item.addEventListener('click', (e) => updateMainPanel(e.target.value)));
    onChange('mainPanel', (newValue: string) => {
        mainArea.innerHTML = newValue === 'video' ? videoOptions() : imageTextInput();
    });
    mainArea.innerHTML = imageTextInput();
  };

const panelhtml = () => { 
    setTimeout(() => setupEventListeners(), 0);
    return /*html*/`
        <sl-split-panel style="height: 100%;" position="80">
            <div
                slot="start"
                style="height: 100%; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
            >
                <div id="main-area"></div>
            </div>
            <div slot="end">
                <sl-split-panel vertical style="height: 100%;" position="75">
                <div
                    slot="start"
                    style="background: var(--sl-color-neutral-50);"
                    class="flex flex-col items-center content-center overflow-hidden h-full"
                >
                <p>Navigation</p>
                ${navigation()}
                </div>
                <div
                    slot="end"
                    style="height: 100%; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
                >
                ${upload()}
                </div>
                </sl-split-panel>
            </div>
        </sl-split-panel>
    `
};
(document.querySelector('#dashboard') as HTMLElement).innerHTML = panelhtml();