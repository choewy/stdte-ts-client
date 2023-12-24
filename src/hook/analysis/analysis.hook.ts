import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PagePath } from '@common';
import { ANALYSIS_PROJECT_RECORD_LIST, AnalysisProjectRecordList, analysisHttpService } from '@service';
import { analysisProjectRecordStore } from '@store';

export class AnalysisHook {
  useGetProjectRecordListCallback() {
    const path = useLocation().pathname;

    const [{ query }, setAnalysisProjectRecord] = analysisProjectRecordStore.useState();

    return useCallback(async () => {
      if (query.s === '' || query.e === '') {
        return;
      }

      let list: AnalysisProjectRecordList = ANALYSIS_PROJECT_RECORD_LIST;

      if (path.startsWith(PagePath.AnalysisProjectOrders)) {
        const res = await analysisHttpService.getProjectOrderRecords(query);

        if (res.ok) {
          list = res.data;
        }
      }

      if (path.startsWith(PagePath.AnalysisProjectSales)) {
        const res = await analysisHttpService.getProjectOrderRecords(query);

        if (res.ok) {
          list = res.data;
        }
      }

      setAnalysisProjectRecord((prev) => ({ ...prev, list }));
    }, [path, query, setAnalysisProjectRecord]);
  }

  useMountProjectRecord() {
    const getList = this.useGetProjectRecordListCallback();

    useEffect(() => {
      getList();
    }, [getList]);
  }

  useUnMountProjectRecord() {
    const setAnalysisProjectRecord = analysisProjectRecordStore.useSetState();

    useEffect(() => {
      return () => {
        setAnalysisProjectRecord((prev) => ({ ...prev, list: ANALYSIS_PROJECT_RECORD_LIST }));
      };
    }, [setAnalysisProjectRecord]);
  }
}

export const analysisHook = new AnalysisHook();
