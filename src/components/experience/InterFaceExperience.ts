import { InterFaceCommon } from '../common/InterFaceCommon'

export declare namespace InterFaceExperience {
    export interface Payload extends InterFaceCommon.Payload {
        data: Data[];
      }

    interface Data {
        title: string;
        position: string;
        startDate: string;
        endDate: string;
        project: Project[];
    }

    interface Project {
        title: string;
        startDate: string;
        endDate: string;
        description: string;
        role: string[];
        tech: string;
    }
}