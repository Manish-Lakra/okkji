export const AppInfo = {

    baseUrlAPI: 'https://kbzdev.affle.com/api',
    // baseUrlAPI: 'http://35.240.129.67:3000/api',
    apiVersion: 'v1',
    serviceTimeOut: 20000,
};

export const apis = {
    sendOtp: 'user/login',
    matchOtp: 'user/match_otp', 
    resendOtp: 'user/resend_otp',
    get_product_details:'product/get_product_details?product_id=',
    filter_Product_List : 'product/filter_product_list',
    getAllCategories: 'category/get_all_category',
    searchProduct: 'product/search_product/',
    get_product_filter : 'product/get_product_filter/',
    get_product_by_category_id : 'product/get_product_by_category_id/',
    getAllStates: 'township/get_all_states',
    getAllCities: 'township/get_all_cities/',
    getAllTownships: 'township/get_all_townships/',
    postSaveNewAddress: 'user/add_address',
    add_product_cart_count:'user/add_product_cart_count',
    remove_cart_item:'user/remove_cart_item',
    user_profile :'user/user_profile',
    getCart:'user/get_cart/',
    getHomeFeaturedProduct: 'product/get_featured_product',
    getUserProfile : 'user/user_profile',
    add_to_cart:'user/add_to_cart',
    editProfile:'user/edit_profile',
    orderList:'user/order_list',
    getWishlist:'user/save_for_later_list',
    moveToCartFromWishlist : 'user/save_for_later_to_cart',
    putUserEdittedData:'user/edit_profile'

}

export default URL = {
    getRequest: 'GET',
    postRequest: 'POST',
    deleteRequest: 'DELETE',
    putRequest: 'PUT',
    baseURL: AppInfo.baseUrlAPI+"/"+AppInfo.apiVersion+"/" ,

}