export class ImportTestReportWrapper {
  importReport: ImportTestReport;
}
export class ImportTestReport {
  status: string;
  errors: string[];
}

export interface Tests {
  tests: Test[];
}

export class Test {
  id: number;
  name: string;
  language: string;
}


