const axios = require('axios');
const moment = require('moment');

// 打卡光盘
async function daka(token) {
    const headers = {
        'Host': 'api.clearplate.org.cn',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'x-app-platform': 'wx',
        'x-form-id-list': '[]',
        'x-token': token,
        'x-version': '6.0.0',
        'accept-language': 'zh-cn',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.16(0x18001026) NetType/WIFI Language/zh_CN',
        'referer': 'https://servicewechat.com/wx6a4976bd627fc4ca/428/page-frame.html',
        'x-oauth-type': '1',
        'x-access-token': 'lI8DB7FI1F3ovLdg3HMSInak62o9XESY',
    };

    const params = {
        'r': 'user-clear-plate/clear-plate',
    };

    const data = 'path_url=%2FclockImg%2F2021%2F11%2F14%2Fe8CmfsNHSA3ys6ZNsPWQTSyMwzfc3wMX1636862639397.jpg&group_id=1282&location=23.308025224%2C113.563811329';

    const response = await axios.post('https://api.clearplate.org.cn/index.php', data, { headers, params });
    return response.data;
}

// 领取小光奖励
async function lingqu(token) {
    const headers = {
        'Host': 'api.clearplate.org.cn',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'x-app-platform': 'wx',
        'x-form-id-list': '[]',
        'x-token': token,
        'x-version': '6.0.0',
        'accept-language': 'zh-cn',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
        'referer': 'https://servicewechat.com/wx6a4976bd627fc4ca/428/page-frame.html',
        'x-oauth-type': '1',
        'x-access-token': 'lI8DB7FI1F3ovLdg3HMSInak62o9XESY',
    };

    const params = {
        'r': 'food-users/harvest',
    };

    const data = 'food_id=2';

    const response = await axios.post('https://api.clearplate.org.cn/index.php', data, { headers, params });
    return response.data;
}

// 喂小光
async function feed(token) {
    const headers = {
        'Host': 'api.clearplate.org.cn',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'x-app-platform': 'wx',
        'x-form-id-list': '[]',
        'x-token': token,
        'x-version': '6.0.0',
        'accept-language': 'zh-cn',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
        'referer': 'https://servicewechat.com/wx6a4976bd627fc4ca/428/page-frame.html',
        'x-oauth-type': '1',
        'x-access-token': 'lI8DB7FI1F3ovLdg3HMSInak62o9XESY',
    };

    const params = {
        'r': 'food-users/food-user-eat',
    };

    const data = 'food_id=2';

    const response = await axios.post('https://api.clearplate.org.cn/index.php', data, { headers, params });
    return response.data;
}

// 领取红包
async function hongbao(token) {
    const headers = {
        'Host': 'api.clearplate.org.cn',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'x-app-platform': 'wx',
        'x-form-id-list': '[]',
        'x-token': token,
        'x-version': '6.0.0',
        'accept-language': 'zh-cn',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
        'referer': 'https://servicewechat.com/wx6a4976bd627fc4ca/428/page-frame.html',
        'x-oauth-type': '1',
        'x-access-token': 'lI8DB7FI1F3ovLdg3HMSInak62o9XESY',
    };

    const params = {
        'r': 'advertisement-list/user-advertisement',
    };

    const data = 'advertisement_id=1';

    const response = await axios.post('https://api.clearplate.org.cn/index.php', data, { headers, params });
    return response.data;
}

// 获取能量
async function nengliang(token) {
    const headers = {
        'Host': 'api.clearplate.org.cn',
        'content-type': 'application/x-www-form-urlencoded',
        'accept': '*/*',
        'x-requested-with': 'XMLHttpRequest',
        'x-app-platform': 'wx',
        'x-form-id-list': '[]',
        'x-token': token,
        'x-version': '6.0.0',
        'accept-language': 'zh-cn',
        'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E217 MicroMessenger/6.8.0(0x16080000) NetType/WIFI Language/en Branch/Br_trunk MiniProgramEnv/Mac',
        'referer': 'https://servicewechat.com/wx6a4976bd627fc4ca/428/page-frame.html',
        'x-oauth-type': '1',
        'x-access-token': 'lI8DB7FI1F3ovLdg3HMSInak62o9XESY',
    };

    const params = {
        'r': 'food-users/get-energy',
    };

    const response = await axios.post('https://api.clearplate.org.cn/index.php', null, { headers, params });
    return response.data;
}

// 定时任务
async function timer(n, token) {
    while (true) {
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
        let data = await daka(token);
        console.log(data);
        data = await feed(token);
        console.log(data);
        data = await lingqu(token);
        console.log(data);
        data = await hongbao(token);
        console.log(data);
        data = await nengliang(token);
        console.log(data);
        await new Promise(resolve => setTimeout(resolve, n * 1000));
    }
}

// 测试
const token = '6e7e2f1a8cc9c9b9e3c5a1e4494f9cc81900d840';
timer(600, token);