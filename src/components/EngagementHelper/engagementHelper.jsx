import Highcharts from 'highcharts';

const engagementMessageOverTimeChartOptions = (messageCountList, channels) => {
  // Step 1: Filter out channels with messages on only a single date
  const filteredChannels = channels.filter(
    (channel) =>
      messageCountList.filter((msg) => msg.channelId === channel.value).length >
      1
  );

  // Step 2: Prepare the data in a format that Highcharts can consume
  const seriesData = filteredChannels.map((channel) => {
    const channelMessages = messageCountList.filter(
      (msg) => msg.channelId === channel.value
    );
    return {
      name: channel.name,
      data: channelMessages.map((msg) => ({
        x: new Date(msg.timeBucket).getTime(),
        y: parseInt(msg.count),
      })),
    };
  });

  // Step 3: Create the `options` object for the Highcharts chart
  const options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Engagement Messages Over Time',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: 'Date',
      },
    },
    yAxis: {
      title: {
        text: 'Message Count',
      },
    },
    tooltip: {
      formatter: function () {
        return (
          '<b>' +
          this.series.name +
          '</b><br/>' +
          Highcharts.dateFormat('%Y-%m-%d', this.x) +
          '<br/>' +
          'Messages: ' +
          this.y
        );
      },
    },
    series: seriesData,
  };

  return options;
};

export default { engagementMessageOverTimeChartOptions };
