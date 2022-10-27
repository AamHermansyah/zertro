const SECRET_KEY = 'api_key=0c54c6793630621c8fd6558322649dc8';
const URL = 'https://api.metalpriceapi.com/v1';
const CHP_IDEAL_FOR_BUY = -10;
const DAYS = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const MONTHS = ['Januari', 'Febuari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

const CONFIG_DATE = {
    ONE_YEAR: 365,
    SIX_MONTH: 180,
    THREE_MONTH: 90,
    ONE_MONTH: 30,
    TWO_WEEK: 14,
    ONE_WEEK: 7
  }

export {
    SECRET_KEY,
    URL,
    CHP_IDEAL_FOR_BUY,
    CONFIG_DATE,
    DAYS,
    MONTHS
}