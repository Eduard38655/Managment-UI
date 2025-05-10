import logoConsolePlus from '../src/assets/logo-console-plus.svg';
import logoDOMSnapshot from "../src/assets/logo-devlens.svg";
import logoGridGuides from '../src/assets/logo-grid-guides.svg';
import logoJSONWizard from '../src/assets/logo-json-wizard.svg';
import logoLinkChecker from '../src/assets/logo-link-checker.svg';
import logoMarkupNotes from '../src/assets/logo-markup-notes.svg';
import logoPalettePicker from '../src/assets/logo-palette-picker.svg';
import logoSpeedBoost from '../src/assets/logo-speed-boost.svg';
import logoStyleSpy from '../src/assets/logo-style-spy.svg';
import logoTabMaster from '../src/assets/logo-tab-master-pro.svg';
import logoViewportBuddy from '../src/assets/logo-viewport-buddy.svg';

const Data_Items_Info=  [
    {
        logo: logoDOMSnapshot,
        name: 'DevLens',
        description: 'Quickly inspect page layouts and visualize element boundaries.',
        isActive: true
      },
      {
        logo: logoStyleSpy,
        name: 'StyleSpy',
        description: 'Instantly analyze and copy CSS from any webpage element.',
        isActive: true
      },
      {
        logo: logoSpeedBoost,
        name: 'SpeedBoost',
        description: 'Optimizes browser resource usage to accelerate page loading.',
        isActive: false
      },
      {
        logo: logoJSONWizard,
        name: 'JSONWizard',
        description: 'Formats, validates, and prettifies JSON responses in-browser.',
        isActive: true
      },
      {
        logo: logoTabMaster,
        name: 'TabMaster Pro',
        description: 'Organizes browser tabs into groups and sessions.',
        isActive: true
      },
      {
        logo: logoViewportBuddy,
        name: 'ViewportBuddy',
        description: 'Simulates various screen resolutions directly within the browser.',
        isActive: false
      },
      {
        logo: logoMarkupNotes,
        name: 'Markup Notes',
        description: 'Enables annotation and notes directly onto webpages for collaborative debugging.',
        isActive: true
      },
      {
        logo: logoGridGuides,
        name: 'GridGuides',
        description: 'Overlay customizable grids and alignment guides on any webpage.',
        isActive: false
      },
      {
        logo: logoPalettePicker,
        name: 'Palette Picker',
        description: 'Instantly extracts color palettes from any webpage.',
        isActive: true
      },
      {
        logo: logoLinkChecker,
        name: 'LinkChecker',
        description: 'Scans and highlights broken links on any page.',
        isActive: true
      },
      {
        logo: logoDOMSnapshot,
        name: 'DOM Snapshot',
        description: 'Capture and export DOM structures quickly.',
        isActive: false
      },
      {
        logo: logoConsolePlus,
        name: 'ConsolePlus',
        description: 'Enhanced developer console with advanced filtering and logging.',
        isActive: true
      }
  ]


  export default Data_Items_Info;