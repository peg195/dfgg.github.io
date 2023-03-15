import React from 'react';
export const Banner00DataSource = {
  wrapper: { className: 'banner0' },
  textWrapper: { className: 'banner0-text-wrapper' },
  title: {
    className: 'banner0-title',
    children: (
      <span>
        <span>
          <span>
            <p>dfggMC</p>
          </span>
        </span>
      </span>
    ),
  },
  content: {
    className: 'banner0-content',
    children: (
      <span>
        <p>
          一个我的世界<span>服务器</span>
        </p>
      </span>
    ),
  },
  button: {
    className: 'banner0-button',
    children: (
      <span>
        <p>加入QQ群</p>
      </span>
    ),
    target: '_blank',
    href: '',
    type: 'default',
  },
};
export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  OverPack: { className: 'footer1', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          className: 'logo',
          children: (
            <span>
              <p>dfggMC</p>
            </span>
          ),
        },
        childWrapper: {
          className: 'slogan',
          children: [
            {
              name: 'content0',
              children: (
                <span>
                  <p>一个我的世界服务器</p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block1',
        xs: 24,
        md: 6,
        className: 'block',
        title: {
          children: (
            <span>
              <p>加入我们</p>
            </span>
          ),
        },
        childWrapper: {
          children: [
            {
              name: 'link0',
              href: 'https://jq.qq.com/?_wv=1027&k=pUKvHIyP',
              children: (
                <span>
                  <p>QQ群</p>
                </span>
              ),
              target: '_blank',
            },
            {
              name: 'link1',
              href: 'https://join.skype.com/visYdS5q3sUB',
              children: (
                <span>
                  <p>Skype群</p>
                </span>
              ),
              target: '_blank',
            },
            {
              name: 'link2',
              href: 'https://discord.gg/jWCdnXB5nR',
              children: (
                <span>
                  <p>Discord服务器</p>
                </span>
              ),
              target: '_blank',
            },
            {
              name: 'link3',
              href: '#',
              children: (
                <span>
                  <p>
                    <br />
                  </p>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block2',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '关于' },
        childWrapper: {
          children: [
            {
              href: '#',
              name: 'link0',
              children: (
                <span>
                  <p>创建时间2022.10.22</p>
                </span>
              ),
            },
            {
              href: '',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <span>
                      <span>
                        <p>
                          <br />
                        </p>
                      </span>
                    </span>
                  </span>
                </span>
              ),
            },
          ],
        },
      },
      {
        name: 'block3',
        xs: 24,
        md: 6,
        className: 'block',
        title: { children: '资源' },
        childWrapper: {
          children: [
            {
              href: 'https://www.tpfeng.top/',
              name: 'link0',
              children: (
                <span>
                  <span>
                    <p>MLBBS</p>
                  </span>
                </span>
              ),
              target: '_blank',
            },
            {
              href: '',
              name: 'link1',
              children: (
                <span>
                  <span>
                    <p>
                      <br />
                    </p>
                  </span>
                </span>
              ),
              target: '_blank',
            },
          ],
        },
      },
    ],
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: (
      <span>
        <span>©2023 by bulkyflute&nbsp; dfggMC</span>
      </span>
    ),
  },
};
