import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import engagementHelper from './engagementHelper';
import messageCountList from '../../assets/MessageCountList.json';
import channels from '../../assets/Channels.json';

const EngagementMessagesOverTime = () => {
  const options = engagementHelper.engagementMessageOverTimeChartOptions(
    messageCountList,
    channels
  );

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
