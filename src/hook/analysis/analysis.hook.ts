import { useCallback, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { PagePath } from '@common';
import {
  ANALYSIS_PROJECT_RECORD_LIST,
  AnalysisProjectRecordList,
  analysisHttpService,
  downloadService,
} from '@service';
import { analysisProjectRecordStore, analysisTimeRecordStore, analysisUserRecordStore } from '@store';

export class AnalysisHook {
  useGetProjectRecordListCallback() {
    const path = useLocation().pathname;

    const [{ query }, setAnalysisProjectRecord] = analysisProjectRecordStore.useState();

    return useCallback(async () => {
      if (query.s.length < 4 || query.e.length < 4) {
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
        const res = await analysisHttpService.getProjectSaleRecords(query);

        if (res.ok) {
          list = res.data;
        }
      }

      setAnalysisProjectRecord((prev) => ({ ...prev, list }));
    }, [path, query, setAnalysisProjectRecord]);
  }

  useMountProjectRecord() {
    const getProjectRecordList = this.useGetProjectRecordListCallback();

    useEffect(() => {
      getProjectRecordList();
    }, [getProjectRecordList]);
  }

  useUnMountProjectRecord() {
    const setAnalysisProjectRecord = analysisProjectRecordStore.useSetState();

    useEffect(() => {
      return () => {
        setAnalysisProjectRecord((prev) => ({ ...prev, list: ANALYSIS_PROJECT_RECORD_LIST }));
      };
    }, [setAnalysisProjectRecord]);
  }

  useGetTimeRecordListCallback() {
    const [{ query }, setAnalysisTimeRecords] = analysisTimeRecordStore.useState();

    return useCallback(async () => {
      if (query.s.length < 4 || query.e.length < 4) {
        return;
      }

      const res = await analysisHttpService.getTimeRecords(query);

      if (res.ok === false) {
        return;
      }

      setAnalysisTimeRecords((prev) => ({ ...prev, list: res.data }));
    }, [query, setAnalysisTimeRecords]);
  }

  useMountTimeRecords() {
    const getTimeRecordList = this.useGetTimeRecordListCallback();

    useEffect(() => {
      getTimeRecordList();
    }, [getTimeRecordList]);
  }

  useUnMountTimeRecords() {
    const resetAnalysisTimeRecords = analysisTimeRecordStore.useResetState();

    useEffect(() => {
      resetAnalysisTimeRecords();
    }, [resetAnalysisTimeRecords]);
  }

  useGetUserRecordListCallback() {
    const [{ query }, setAnalysisUserRecords] = analysisUserRecordStore.useState();

    return useCallback(async () => {
      if (query.s.length < 4 || query.e.length < 4) {
        return;
      }

      const res = await analysisHttpService.getUserRecords(query);

      if (res.ok === false) {
        return;
      }

      setAnalysisUserRecords((prev) => ({ ...prev, list: res.data }));
    }, [query, setAnalysisUserRecords]);
  }

  useDownloadUserRecordListCallback() {
    const { query } = analysisUserRecordStore.useValue();

    return useCallback(async () => {
      if (query.s.length < 4 || query.e.length < 4) {
        return;
      }

      const res = await analysisHttpService.downloadUserRecords(query);

      if (res.ok === false) {
        return;
      }

      downloadService.download(res.data.url, res.data.filename);
    }, [query]);
  }

  useMountUserRecords() {
    const getUserRecordList = this.useGetUserRecordListCallback();

    useEffect(() => {
      getUserRecordList();
    }, [getUserRecordList]);
  }

  useUnMountUserRecords() {
    const resetAnalysisUserRecords = analysisUserRecordStore.useResetState();

    useEffect(() => {
      resetAnalysisUserRecords();
    }, [resetAnalysisUserRecords]);
  }
}

export const analysisHook = new AnalysisHook();
