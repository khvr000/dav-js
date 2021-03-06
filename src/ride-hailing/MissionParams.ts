import BaseMissionParams from '../MissionParams';
import IBaseMissionParams from '../IMissionParams';
import ProtocolTypes from './ProtocolTypes';

/**
 * @class The Class ride-hailing/MissionParams represent the parameters of ride-hailing mission.
 */
export default class MissionParams extends BaseMissionParams {

    private static _protocol = 'ride_hailing';
    private static _type = 'mission';

    public static getMessageType(): string {
        return MissionParams._type;
    }

    public static getMessageProtocol(): string {
        return MissionParams._protocol;
    }

    constructor(values?: Partial<IBaseMissionParams>) {
        super(MissionParams._protocol, MissionParams._type, values);
    }

    public serialize() {
        const formattedParams = super.serialize();
        return formattedParams;
    }

    public getProtocolTypes() {
        return ProtocolTypes;
    }

    public deserialize(json: any): void {
        super.deserialize(json);
    }
}
