import React, { useEffect } from 'react';
import { renderRoutes } from 'react-router-config';

export default function News(props): any {

  return (
   <>
    <div style={{ height: 1000 }}>这里是消息也</div>
    {renderRoutes(props.route.routes)}
    
   </>
  );
}