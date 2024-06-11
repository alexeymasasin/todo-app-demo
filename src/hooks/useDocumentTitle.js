import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const useDocumentTitle = (pageTitle) => {
  const { t } = useTranslation();
  return (
    useEffect(() => {
      document.title = 'Todo App · ' + t(pageTitle);
    })
  );
};

export default useDocumentTitle;