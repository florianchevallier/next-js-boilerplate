import { NodePlopAPI } from 'node-plop';
import shell from 'shelljs';
import { sliceGenerator } from './slice';
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (answers, config) => {
    // @ts-ignore
    const data = config.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
