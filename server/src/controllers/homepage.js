import ejs from 'ejs';
import path from 'path';
import { isWXWork } from '../utils';

const serveEntryHtml = (ctx, htmlFile, data) => {
  const filePath = path.resolve(ctx.app.rootDir, htmlFile);
  ejs.renderFile(filePath, data, { delimiter: '?' }, function(error, html) {
    if (error) {
      ctx.status = 500;
      ctx.body = JSON.stringify(error);
    } else {
      ctx.status = 200;
      ctx.type = 'text/html; charset=utf-8';
      ctx.body = html;
    }
  });
};

// pc端处理逻辑 TODO
export const pcEntryController = async ctx => {
  const htmlFile = 'client/dist/index.html';
  // 获取登陆信息表示token，如果没有重新登录，否则进入client端页面
  try {
    const data = {
      userJsonString: JSON.stringify({
        usercode: '12345',
        name: '测试账号',
      }),
      token: 'xxx',
    };
    return serveEntryHtml(ctx, htmlFile, data);
  } catch (error) {
    console.error(error);
    // 尝试重新登录 TODO
  }
};

// 微信端处理逻辑 TODO
export const mEntryController = async ctx => {
  const htmlFile = 'client/dist/index.html';
  return serveEntryHtml(ctx, htmlFile, {
    token: 'xxx'
  });
};

export const entryController = async ctx => {
  // 如果是微信
  if (isWXWork(ctx)) {
    console.log('微信中');
    await mEntryController(ctx);
  }  
  // 如果在浏览器中
  else {
    console.log('浏览器中');
    await pcEntryController(ctx);
  }
};
