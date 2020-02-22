import { colors as c } from '../res/colors'
import { dimen as d } from '../res/dimen'
export const themes = {
    // headerContainer: {
    //     // flexDirection: 'row',
    //     // height: d._70,
    //     // paddingHorizontal: d._20,
    //     alignItems: 'center',
    //     backgroundColor : '#1A83DB'
    // },
    content1: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    content: { flex: 1, },

    // headerBackwardArrow: {
    //     // paddingRight: d._20,
    //     // paddingVertical: d._20
    // },
    headerContainer: {

        paddingTop: 1 ,
        flexDirection: 'row',
        height: 65,
        paddingHorizontal: 20,
        alignItems: 'center',
        backgroundColor: c.header,
        // justifyContent : 'space-evenly'

    },
    picker: {
        width: 130,
        height: 50,

    },
     alignText:{
            textAlign:'center'
        },

    headerBackwardArrow: {




        paddingRight: 10,
        paddingVertical: 20
    },

    headerRightIcon: {
        padding: 5,
        paddingVertical: 30
    },


    headerTextInputStyle: {
        flex: 0.75,
        borderRadius: 2,
    },

    contentCenter: {
        textAlign: 'center'
    },

    boldfontStyle: {
        fontWeight: 'bold'
    },
    alignItemsInRow: {
        flexDirection: 'row'
    },
    alignItemsInCenter: {
        alignItems: 'center'
    },

    filterTextStyle: { flexDirection: 'row', padding: 5, justifyContent: 'space-between', margin: 5, },
    simpleButton: {
        padding: 17,
        color: c.textColor,
        textAlign: 'center',
        fontSize: d.mediumTextSize,
        fontWeight: '600'
    },
    button: {
        marginTop: 20,
        marginBottom: 25,
        color: c.textColor,
        backgroundColor: c.primaryColor,
        borderRadius: d.defaultBorderRadius,
        fontSize: d.mediumTextSize,
        overflow: 'hidden',
    },
    shadow: {
        shadowColor: '#757575',
        overflow: 'hidden',
        shadowRadius: 5,
        shadowOpacity: .5,
        shadowOffset: {
            width: 10,
            height:10
        },
    },
    popupWindow: {
        backgroundColor: c.white,
        margin: d.popupDefaultMargine,
        borderRadius: d.defaultBorderRadius,
        overflow: 'hidden',
        borderRadius :15,

    },
}
