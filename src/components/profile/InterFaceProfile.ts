import { InterFaceCommon } from '../common/InterFaceCommon'
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

export declare namespace InterFaceProfile {
    export interface Payload extends InterFaceCommon.Payload {
      name: string[];
      intro: string[];
      contact: Contact[];
    }
  
    interface Contact {
      text: string;
      link?: string;
      icon: IconDefinition;
    }
  }
  