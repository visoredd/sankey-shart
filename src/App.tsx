import './App.css'
import { useSelector } from 'react-redux'
import type { RootState } from './store/store'
import { SankeyChart } from './SankeyChart'
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  const {data,options} = useSelector((state: RootState) => state.chartSlice)
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };
  
  return (
    <div>
       <div>
      <h1>{t('welcome')}</h1>
      <button onClick={() => changeLanguage('en')}>{t('changeLanguage')} (English)</button>
      <button onClick={() => changeLanguage('es')}>{t('changeLanguage')} (Spanish)</button>
    </div>
    <SankeyChart data={data} options={options} />
    </div>
   
  )
}

export default App
