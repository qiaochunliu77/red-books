import React from "react";
import { Switch ,Route } from "react-router";
import BottomView from 'components/common/bottom-view';

const renderRoutes = (routes, extraProps = {}, switchProps = {}) =>
 routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => ( 
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => {
            const showTarbar = props.location.pathname ==='/' || props.location.pathname ==='/home'|| props.location.pathname==='/auth';
            return (
              <>
                {
                  showTarbar && <BottomView />
                }
                <route.component {...props} {...extraProps} route={route} />
              </>
              );
          }
            
            // 当页面需要不登录时，跳转到指定路由
            // if(!route.needLogin) {
            //   return route.render ?(
            //     route.render({ ...props, ...extraProps, route })
            //   ): (
            //     <route.component {...props} {...extraProps} route={route} />
            //   );}
            
          }
        />
      ))}
    </Switch>
  ) : null;

 export default renderRoutes;