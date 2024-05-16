"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const HttpException_1 = __importDefault(require("../exceptions/HttpException"));
class PlantService {
    constructor() {
        this.plantsFile = path_1.default.join(__dirname, '..', 'models', 'database', 'plantsData.json');
        this.plantsMetadataFile = path_1.default.join(__dirname, '..', 'models', 'database', 'plantsMetadata.json');
    }
    async getNextPlantId(incrementAmount = 1) {
        const dataRaw = await promises_1.default.readFile(this.plantsMetadataFile, { encoding: 'utf8' });
        const plantsMetadata = JSON.parse(dataRaw);
        plantsMetadata.lastPlantId += incrementAmount;
        await promises_1.default.writeFile(this.plantsMetadataFile, JSON.stringify(plantsMetadata, null, 2));
        return plantsMetadata.lastPlantId;
    }
    async getAll() {
        const dataRaw = await promises_1.default.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants = JSON.parse(dataRaw);
        return plants;
    }
    async create(plant) {
        const { breed, needsSun, origin, size, } = plant;
        if (typeof breed !== 'string') {
            throw new HttpException_1.default(400, 'Attribute "breed" must be string.');
        }
        if (typeof needsSun !== 'boolean') {
            throw new HttpException_1.default(400, 'Attribute "needsSun" must be boolean.');
        }
        if (typeof origin !== 'string') {
            throw new HttpException_1.default(400, 'Attribute "origin" must be string.');
        }
        if (typeof size !== 'number') {
            throw new HttpException_1.default(400, 'Attribute "size" must be number.');
        }
        const waterFrequency = needsSun
            ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
            : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
        const dataRaw = await promises_1.default.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants = JSON.parse(dataRaw);
        const newPlantId = await this.getNextPlantId(1);
        const newPlant = { id: newPlantId, ...plant, waterFrequency };
        plants.push(newPlant);
        await promises_1.default.writeFile(this.plantsFile, JSON.stringify(plants, null, 2));
        return newPlant;
    }
}
exports.default = PlantService;
