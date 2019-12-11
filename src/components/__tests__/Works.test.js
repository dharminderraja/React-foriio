import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import { MemoryRouter } from 'react-router';
import Works from 'components/Works';
import WorkItem from 'components/WorkItem'

const initialState = {
    works: [
      {
        id: 9998,
        title: 'Living with Project - Gatebox logo animation',
        notes_count: 0,
        published_at: '2019-06-27T16:02:47.754Z',
        is_nsfw: false,
        thumbnail: 'https://foriio.imgix.net/store/cae616c65c9613a252a6f9b9924d1219.gif?ixlib=rb-3.1.1&auto=format%2Ccompress&w=688&h=424&fit=max&fm=gif&bg=FFFFFF&frame=-&gif-q=80&skip=3&s=86861869d06fd96e4a66cb7ae8ff456a',
        author_id: 307,
        owner_id: 307,
        type: 'image',
        category_list: [
          'Logo'
        ],
        user_roles: [
          'Art direction, design'
        ]
      },
      {
        id: 960,
        title: 'ヤなことそっとミュート エイプリールフール',
        notes_count: 0,
        published_at: '2018-08-17T07:25:32.369Z',
        is_nsfw: false,
        thumbnail: 'https://foriio.imgix.net/store/5953ef8a31e9a849850c370e5088644a.gif',
        author_id: 307,
        owner_id: 307,
        type: 'image',
        category_list: [
          'Idol'
        ],
        user_roles: [
          'Art Director / Designer'
        ]
      },
      {
        id: 477,
        title: 'foriio - Intro video',
        notes_count: 0,
        published_at: '2018-06-05T17:09:58.054Z',
        is_nsfw: false,
        thumbnail: 'https://i.vimeocdn.com/video/704298812_1920x1080.jpg?r=pad',
        author_id: 307,
        owner_id: 307,
        type: 'video',
        category_list: [
          'Movie'
        ],
        user_roles: [
          'Creative director'
        ]
      }
    ]
  };

it('shows the works list with workitem', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/hirohito' ]}>
            <Root initialState={initialState}>
                <Works/>
            </Root>
        </MemoryRouter>
      );

    expect(wrapper.find(WorkItem).length).toEqual(3);
    
    wrapper.unmount();
});