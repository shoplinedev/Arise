window.SLM = window.SLM || {};

window.SLM['theme-shared/utils/report/hd-const.js'] = window.SLM['theme-shared/utils/report/hd-const.js'] || function () {
  const _exports = {};
  const eventName = {
    view: '101',
    additem: '102',
    updateitem: '103',
    removeitem: '104',
    checkout: '105',
    recommenditem: '106',
    proceed_to_checkout: '107',
    place_order: '108',
    click_component: '109',
    product_view: '110',
    product_share: '111',
    buy_now: '112',
    select_product: '113',
    deselect_product: '114',
    menu_view: '115',
    menu_click: '116',
    catalog_view: '117',
    catalog_click: '118',
    sku_click: '119',
    component_view: '120',
    display_click: '121',
    sort_click: '122',
    select_bundling: '123',
    add_wishlist: '124',
    cancel_wishlist: '125',
    proceed_to_delivery_payment: '126',
    proceed_to_pay: '127',
    proceed_to_delivery: '128',
    quick_payment: '129',
    click_product: '130',
    search_suggest: '131',
    paypal: '132',
    input: '133',
    modify: '134',
    select_shipping: '135',
    select_payment: '136',
    inventory_shortage: '137',
    login_success: '138',
    view_cart: '139',
    leave: '999'
  };
  _exports.eventName = eventName;
  const eventCategory = {
    order: '101',
    cart: '102',
    email: '103',
    expresscheckoutpage: '104'
  };
  _exports.eventCategory = eventCategory;
  const productType = {
    product: '101',
    addon: '102',
    subscription: '103'
  };
  _exports.productType = productType;
  const status = {
    soldout: '101',
    selling: '102'
  };
  _exports.status = status;
  const purchaseSource = {
    common_store: '101',
    one_page_store: '102'
  };
  _exports.purchaseSource = purchaseSource;
  const page = {
    homepage: '101',
    pdp: '102',
    cart: '103',
    order_check_out: '104',
    transaction: '105',
    product_search: '106',
    product_list: '107',
    user_page: '108',
    email: '109',
    expresscheckout: '110',
    '404page': '111',
    call_to_action: '112',
    consumer_home: '113',
    onepage_checkout: '114',
    address_confirm: '115',
    delivery_payment_confirm: '116',
    delivery_confirm: '117',
    payment_confirm: '118',
    addon: '119',
    other: '120',
    landing_page: '121'
  };
  _exports.page = page;
  const generalComponent = {
    catalog: '101',
    logo: '102',
    search: '103',
    sign_in_bottom: '104',
    message: '105',
    cart: '106',
    store_language: '107',
    currency: '108',
    search_product: '109',
    H1: '110',
    paragraph: '111',
    single_image: '112',
    slider: '113',
    poster: '114',
    gallery: '115',
    media_lr: '116',
    media_ud: '117',
    end_payment: '118',
    end_email: '119',
    end_fb: '120',
    end_ins: '121',
    end_twitter: '122',
    end_snapchat: '123',
    end_pinterest: '124',
    end_line: '125',
    theme: '126',
    free_layout: '127',
    search_pop: '128',
    search_bar: '129'
  };
  _exports.generalComponent = generalComponent;
  const customComponent = {
    sign_up_tab: '101',
    sign_in_tab: '102',
    line_signin: '103',
    fb_signin: '104',
    sign_in_105: '105',
    sign_up: '106',
    title_component: '107',
    content_component: '108',
    productmoduel_component: '109',
    productlist_component: '110',
    QRcode_component: '111',
    ins_component: '112',
    googlemap_component: '113',
    facebook_component: '114',
    video_component: '115',
    pic_component: '116',
    product_menu: '117',
    pre_order: '118',
    gotoamazon: '119',
    wishlist: '120',
    product_descri: '121',
    deliver_payment: '122',
    score: '123',
    reviews: '123',
    share: '124',
    recommendation: '125',
    checkout: '126',
    removement: '127',
    sign_in_128: '128',
    proceed_to_checkout: '129',
    select_all: '130',
    deselect_all: '131',
    select: '132',
    deselect: '133',
    product_edit: '134',
    subscribe_line: '135',
    back_to_cart: '136',
    place_order: '137',
    buy_now: '138',
    view_more: '139',
    play_video: '140',
    more_bundling: '141',
    rec_turn_page: '142',
    arrival_notice: '143',
    more_reviews: '144',
    consumer_info: '145',
    message: '146',
    order: '147',
    return_order: '148',
    wishlist_149: '149',
    wishlist_turn_page: '150',
    use_coupon: '151',
    sign_in: '152',
    subscription: '153',
    back: '154',
    continue: '155'
  };
  _exports.customComponent = customComponent;
  const displayIterm = {
    24: '101',
    48: '102',
    72: '103'
  };
  _exports.displayIterm = displayIterm;
  const sortBy = {
    newestToOldest: '101',
    oldestToNewest: '102',
    priceHighToLow: '103',
    priceLowToHigh: '104',
    default: '999'
  };
  _exports.sortBy = sortBy;
  const proListType = {
    category: '101',
    all_product: '102',
    chosen_product: '103'
  };
  _exports.proListType = proListType;
  const shareDest = {
    line: '101',
    fb: '102',
    message: '103',
    link: '104',
    whatsapp: '105',
    twitter: '106'
  };
  _exports.shareDest = shareDest;
  const signinSource = {
    sign_in_bottom: '101',
    order_edit: '102'
  };
  _exports.signinSource = signinSource;
  const searchType = {
    user_search: '101',
    suggest_ai: '102',
    suggest_search: '103'
  };
  _exports.searchType = searchType;
  const inputBox = {
    email: '101',
    first_name: '102',
    last_name: '103',
    country: '104',
    province: '105',
    city: '106',
    district: '107',
    address1: '108',
    address2: '108',
    postcode: '109',
    phone: '110',
    same_address: '111',
    another_address: '112',
    remark: '113'
  };
  _exports.inputBox = inputBox;
  const objectType = {
    info: '101',
    address: '102',
    shipping: '103'
  };
  _exports.objectType = objectType;
  const isFirst = {
    yes: '1',
    no: '0'
  };
  _exports.isFirst = isFirst;
  const loginResult = {
    success: '1',
    fail: '0'
  };
  _exports.loginResult = loginResult;
  const paramsMapping = {
    event_name: eventName,
    event_category: eventCategory,
    product_type: productType,
    status,
    purchase_source: purchaseSource,
    page,
    general_component: generalComponent,
    custom_component: customComponent,
    display_iterm: displayIterm,
    sort_by: sortBy,
    pro_list_type: proListType,
    share_dest: shareDest,
    signin_source: signinSource,
    search_type: searchType,
    input_box: inputBox,
    object: objectType,
    isFirst,
    loginResult
  };
  _exports.paramsMapping = paramsMapping;
  const paramsMappingToArrayKeys = ['general_component', 'custom_component', 'status', 'product_type'];
  _exports.paramsMappingToArrayKeys = paramsMappingToArrayKeys;
  const iframeUrl = {
    develop: 'https://mp-comiframe.myshoplinedev.com/',
    staging: 'https://mp-comiframe.myshoplinestg.com/',
    product: 'https://mp-comiframe.myshopline.com/',
    preview: 'https://mp-comiframe-preview.myshopline.com'
  };
  _exports.iframeUrl = iframeUrl;
  return _exports;
}();