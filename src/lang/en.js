export default {
  route: {
    dashboard: "Dashboard",
    modules: "Modules",
    components: "Components",
    users: "Users",
    complexes: "Complexes",
    create_complex: "Create new complex",
  },
  navbar: {
    logOut: "Log Out",
    dashboard: "Dashboard",
    screenfull: "Full screen",
    size: "Global Size",
    changePassword: "Change password",
    updatePrivilege: "Upgrade accessibility",
    dialogs: {
      change_password: {
        title: "Change password",
        password: "New password",
        password_repeat: "New password repeat",
        changed_success: "Password successfully changed.",
        repeat_not_match: "Password repeat does not match.",
        less_than_6: "Password length must be more than 6.",
        unknown_error: "Unknown error, try again or contact support team.",
      },
      update_privilege: {
        title: "Upgrade accessibility",
        select_level: "Select privilege level",
        password: "Password",
        elevated_success: "User role elevated successfully.",
        control_access: "Control",
        setting_access: "Setting",
        all_setting_access: "All Setting",
        less_than_6: "Password length must be more than 6.",
        failed_to_update_info: "Failed to update privilege info. try again.",
        wrong_password: "Wrong password.",
        unknown_error: "Unknown error, try again or contact support team.",
      },
    },
  },
  login: {
    title: "Elemento Panel",
    logIn: "Login",
    username: "Username",
    password: "Password",
  },
  permission: {
    roles: "Your roles",
    switchRoles: "Switch roles",
  },
  guide: {
    description:
      "The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ",
    button: "Show Guide",
  },
  components: {
    documentation: "Documentation",
    tinymceTips:
      "Rich text editor is a core part of management system, but at the same time is a place with lots of problems. In the process of selecting rich texts, I also walked a lot of detours. The common rich text editors in the market are basically used, and the finally chose Tinymce. See documentation for more detailed rich text editor comparisons and introductions.",
    dropzoneTips:
      "Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.",
    stickyTips:
      "when the page is scrolled to the preset position will be sticky on the top.",
    backToTopTips1:
      "When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner",
    backToTopTips2:
      "You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally",
    imageUploadTips:
      "Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.",
  },
  table: {
    send: "Send",
    dynamicTips1: "Fixed header, sorted by header order",
    dynamicTips2: "Not fixed header, sorted by click order",
    dragTips1: "The default order",
    dragTips2: "The after dragging order",
    name: "Name",
    color: "Color",
    descriptionsummary: "Desc. Sum.",
    description: "Description",
    viewcount: "#View",
    demandcount: "#Demand",
    salecount: "#Sale",
    staticimage: "Image",
    image: "Image",
    staticprice: "Stat. Price",
    pricelimit: "Lim. Price",
    category: "Category",
    aliasOf: "Alias Of",
    externalprice: "Ext. Price",
    externallink: "Ext. Link",
    price: "Price",
    extprice: "Ext. Price",
    remove: "Remove",
    type: "Type",
    details: "Details",
    address: "Address",
    postalCode: "Postal.",
    city: "City",
    state: "State",
    remark: "Remark",
    search: "Filter",
    product: "Product",
    customer: "Customer",
    priceType: "Pr. Type",
    count: "Count",
    done: "Done",
    images: "Images",
    seller: "Seller",
    firstname: "First Name",
    lastname: "Last Name",
    phone: "Phone",
    storephone: "Store Phone",
    email: "E-Mail",
    addresses: "Addresses",
    close: "Close",
    path: "Path",
    add: "Add",
    value: "Value",
    key: "Key",
    export: "Export",
    reviewer: "reviewer",
    id: "ID",
    date: "Date",
    author: "Author",
    readings: "Readings",
    status: "Status",
    actions: "Actions",
    edit: "Edit",
    publish: "Publish",
    draft: "Draft",
    delete: "Delete",
    cancel: "Cancel",
    confirm: "Confirm",
    apply: "Apply",
  },
  errorLog: {
    tips: "Please click the bug icon in the upper right corner",
    description:
      "Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.",
    documentation: "Document introduction",
  },
  excel: {
    export: "Export",
    selectedExport: "Export Selected Items",
    placeholder: "Please enter the file name(default excel-list)",
  },
  zip: {
    export: "Export",
    placeholder: "Please enter the file name(default file)",
  },
  theme: {
    change: "Change Theme",
    documentation: "Theme documentation",
    tips: "Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.",
  },
  tagsView: {
    refresh: "Refresh",
    close: "Close",
    closeOthers: "Close Others",
    closeAll: "Close All",
  },
  tables: {
    modules: {
      complex_district: "Complex(District)",
      code: "Code",
      active: "Active",
      status: "Status",
      last_seen: "Last Seen",
      registered: "Registered",
      edit: "Edit",
    },
    complexes: {
      id: "ID",
      name: "Name",
      address: "Address",
      phoneNumber: "Phone Number",
      edit: "Edit",
      create: {
        modules_table: {
          code: "Code",
          action: "Action",
          district: "District",
          remove: "Remove",
        },
        steps: {
          create_complex: "Create complex",
          create_user: "Create user",
          add_modules: "Add modules",
        },
        forms: {
          complex_name: "Title",
          complex_address: "Address",
          complex_phone: "Phone number",
          username: "Username",
          mail: "E-Mail",
          first_name: "First name",
          last_name: "Last name",
          manager_phone: "Phone number",
          select_modules: "Select modules",
          failed_to_load_modules: "Failed to load modules. click to retry.",
          no_module_selected: "* No module selected.",
          previous: "Previous",
          next: "Next",
          submit: "Submit",
          rules: {
            empty_error: "Field cannot be empty",
            l_6_20: "Length should be between 6 and 20",
            l_6_48: "Length should be between 6 and 48",
            l_3_256: "Length should be between 3 and 256",
            mail_error: "Enter a valid email",
          },
        },
      },
      create_button: "Create",
    },
    users: {
      name: "Name",
      username: "Username",
      complex: "Complex",
      email: "Email",
      edit: "Edit",
    },
    faults: {
      time: "Time",
      code: "Code",
      description: "Description",
      elevator: "Elevator",
      floor: "Floor",
      numerator: "FloorNum",
    },
  },
  module: {
    loading: "Loading...",
    board_settings: "Board settings",
    priority_settings: "Priority settings",
    tabs: {
      elevators: "Elevators",
      status: "Status",
      faults: "Faults",
      stopscount: "Stops count",
    },
    connection: {
      reconnect_server: "Reconnect to server",
      reconnect_elevator: "Reconnect to elevator",
      reconnect_module: "Reconnect module internet",
    },
    elevator: {
      call_dialog: {
        title: "Send call command to elevator ",
      },
      learn_dialog: {
        title: "Send learn command to elevator ",
        approval: "Are you sure to send learn command?",
      },
      titles: {
        system_type: "ST",
        direction: "DIR",
        stops_count: "Stops count",
      },
    },
    fault_filters: {
      start_date: "Start date:",
      end_date: "End date:",
      codes: "Fault codes:",
      elevators: "Elevators:",
      placeholders: {
        date: "Select date and time",
        codes: "Select fault codes",
        elevators: "Select elevators",
      },
    },
    setting: {
      command: {
        save: "Save",
        sendToRpi: "Send to Rpi",
        receiveFromRpi: "Receive From Rpi",
        dlBackup: "Download Backup",
        ulBackup: "Upload Backup",
        back: "Back",
      },
      need_to_read: "You first have to read settings from the module.",
      parkingPriorities: "Parking priorities",
      elevatorPriorities: "Elevator priorities",
      elevatorCallLocks: "Elevator call locks",
    },
    purge_dialog: {
      btn_tooltip: "Purge Module",
      title: "Purge module",
      message:
        "Are you sure you want to purge this module? It will be deleted from its complex. and it will be ready to be added to a new complex.",
    },
  },
  complex: {
    delete_dialog: {
      btn_tooltip: "Delete complex",
      title: "Deleting complex",
      message:
        "Are you sure you want to delete this complex?\n All modules will also be purged.",
    },
  },
  user: {
    delete_dialog: {
      btn_tooltip: "Delete user",
      title: "Deleting user",
      message:
        "Are you sure you want to delete this user?\n Its complex will be deleted, and its modules will be purged.",
    },
  },
  dialogs: {
    cancel: "Cancel",
    send: "Send",
    purge: "Purge",
    delete: "Delete",
    apply: "Apply",
    change: "Change",
    delete_dialog: {
      title: "Delete entity?",
      message: "Confirm deletion.",
    },
  },
};
