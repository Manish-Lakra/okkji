
import { NavigationActions, StackActions } from "react-navigation"
export default class NavUtil {

    static navUtil = NavUtil.navUtil == null ? new NavUtil() : this.navUtil;

  

  
    navigateWithResetStack(context, screen, params = {}) {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: screen, params })]
        })
        context.props.navigation.dispatch(resetAction)

    }

    navigateTo(context, screen, props) {
        console.log("Navigating to" + screen)
        context.props.navigation.navigate(screen, props, { ...context.props });

    }
}