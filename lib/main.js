"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const client_1 = require("./client");
function run() {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const AT_API_KEY = core.getInput('AT_API_KEY') || process.env.AT_API_KEY || '';
        const AT_USERNAME = core.getInput('AT_USERNAME') || process.env.AT_USERNAME || '';
        const isSandbox = core.getBooleanInput('sandbox');
        const fromPhoneNumber = core.getInput('fromPhoneNumber');
        const sandbox = (_a = core.getBooleanInput('sandbox')) !== null && _a !== void 0 ? _a : process.env.SANDBOX === 'true';
        const _toPhoneNumber = core.getInput('toPhoneNumber');
        const toPhoneNumber = _toPhoneNumber.includes(',')
            ? _toPhoneNumber.split(',').map(item => item.trim())
            : _toPhoneNumber;
        const message = core.getInput('message');
        const client = new client_1.Client(AT_API_KEY, AT_USERNAME, fromPhoneNumber, sandbox);
        try {
            core.debug(isSandbox ? 'Sandbox mode' : 'Production mode');
            core.debug('Sending SMS');
            const result = yield client.sendSms(Array.isArray(toPhoneNumber) ? toPhoneNumber : [toPhoneNumber], message);
            core.debug('SMS sent!');
            core.setOutput('messageId', result.messageId);
        }
        catch (error) {
            if (error instanceof Error) {
                core.setFailed(error.message);
            }
            core.debug('SMS failed!');
        }
    });
}
exports.default = run;
run();
