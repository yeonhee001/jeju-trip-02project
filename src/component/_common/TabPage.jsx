import React, { useState } from 'react'
import TabMenu from './TabMenu';

function TabPage({ type, onTabChange }) {
  // 제목 입력, 선택된 탭 기억, 탭에 따라 내용 

  const tab = {
    activity: {
      mainTitle: '나의 활동',
      tabTitle: ['게시물', '댓글']
    },
    like: {
      mainTitle: '좋아요',
      tabTitle: ['장소', '게시물']
    },
    plan: {
      mainTitle: '나의 일정 추가',
      tabTitle: ['지역별', '좋아요']
    }
  }

  return (
    <>
      <h2 className='tab-maintitle'>{tab[type].mainTitle}</h2>
      <TabMenu tabTitle={tab[type].tabTitle} onTabChange={onTabChange}/>
    </>
  )
}

export default TabPage