export default {
  route: {
    dashboard: "داشبورد",
    modules: "ماژول‌ها",
    components: "اجزاء",
    users: "کاربران",
    complexes: "مجتمع‌ها",
    create_complex: "ساخت مجتمع جدید",
  },
  navbar: {
    logOut: "خروج",
    dashboard: "داشبورد",
    screenfull: "تمام صفحه",
    changePassword: "تغییر گذرواژه",
    updatePrivilege: "ارتقاء دسترسی",
    size: "اندازه کلی",
    dialogs: {
      change_password: {
        title: "تغییر گذرواژه",
        password: "گذرواژه جدید",
        password_repeat: "تکرار گذرواژه جدید",
        changed_success: "گذرواژه با موفقیت تغییر کرد.",
        repeat_not_match: "تکرار گذرواژه با گذرواژه یکسان نیست.",
        less_than_6: "طول گذرواژه باید بیشتر از ۶ باشد.",
        unknown_error:
          "خطای ناشناخته. دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.",
      },
      update_privilege: {
        title: "ارتقاء سطح دسترسی",
        select_level: "انتخاب سطح دسترسی",
        password: "گذرواژه",
        elevated_success: "ارتقاء سطح دسترسی با موفقیت انجام شد.",
        control_access: "کنترل",
        setting_access: "تنظیمات",
        all_setting_access: "تمام تنظیمات",
        less_than_6: "طول گذرواژه باید بیشتر از ۶ باشد.",
        failed_to_update_info:
          "خطا در بروزرسانی اطلاعات سطح دسترسی.دوباره تلاش کنید.",
        wrong_password: "گدرواژه اشتباه است.",
        unknown_error:
          "خطای ناشناخته. دوباره تلاش کنید یا با پشتیبانی تماس بگیرید.",
      },
    },
  },
  login: {
    title: "Elemento | پنل مدیریتی دوزبانه",
    logIn: "ورود",
    username: "نام کاربری",
    password: "گذرواژه",
  },
  permission: {
    roles: "نقش های شما",
    switchRoles: "تغییر نقش",
  },
  tables: {
    modules: {
      complex_district: "مجتمع(حوزه)",
      code: "کد",
      active: "فعال",
      registered: "ثبت شده",
      edit: "ویرایش",
    },
    complexes: {
      id: "ID",
      name: "نام",
      address: "آدرس",
      edit: "ویرایش",
      create: {
        modules_table: {
          code: "کد",
          action: "حذف",
          district: "ناحیه",
          remove: "حذف",
        },
        steps: {
          create_complex: "ساخت مجتمع",
          create_user: "ساخت کاربر",
          add_modules: "افزودن ماژول ها",
        },
        forms: {
          complex_name: "نام",
          complex_address: "آدرس",
          complex_phone: "شماره تلفن",
          username: "نام کاربری",
          mail: "ایمیل",
          first_name: "نام",
          last_name: "نام خانوادگی",
          manager_phone: "شماره تلفن",
          select_modules: "انتخاب ماژول ها",
          failed_to_load_modules:
            "خطا در بارگذاری ماژول ها. برای تلاش دوباره کلیک کنید.",
          no_module_selected: "* هیچ ماژولی انتخاب نشده است.",
          previous: "قبل",
          next: "بعد",
          submit: "ثبت",
          rules: {
            empty_error: "ورودی نباید خالی باشد",
            l_6_20: "طول ورودی باید بین ۶ و ۲۰ باشد",
            l_6_48: "طول ورودی باید بین ۶ و ۴۸ باشد",
            l_3_256: "طول ورودی باید بین ۳ و ۲۵۶ باشد",
            mail_error: "یک ایمیل درست وارد کنید",
          },
        },
      },
      create_button: "بساز",
    },
    users: {
      name: "نام",
      username: "نام کاربری",
      complex: "مجتمع",
      email: "ایمیل",
      edit: "ویرایش",
    },
    faults: {
      time: "زمان",
      code: "کد",
      description: "توضیحات",
      elevator: "آسانسور",
      floor: "طبقه",
      numerator: "شاخص",
    },
    stops_count: {
      time: "زمان",
      count: "شمار توقف ها",
      elevator: "آسانسور",
    },
  },
  module: {
    loading: "بارگذاری...",
    board_settings: "تنظیمات برد اصلی",
    priority_settings: "تنظیمات اولویت ها",
    tabs: {
      elevators: "نمایشی",
      status: "وضعیت",
      faults: "خطاها",
      stopscount: "تعداد استارت",
    },
    connection: {
      reconnect_server: "ارتباط دوباره به سرور",
      reconnect_elevator: "ارتباط دوباره به آسانسور",
    },
    elevator: {
      call_dialog: {
        title: "ارسال شاسی به آسانسور ",
      },
      learn_dialog: {
        title: "ارسال دستور لرن به آسانسور ",
        approval: "آیا از ارسال دستور لرن مطمئن هستید؟",
      },
      titles: {
        system_type: "عنوان",
        direction: "جهت",
        stops_count: "شمار توقف ها",
      },
    },
    fault_filters: {
      start_date: "زمان شروع:",
      end_date: "زمان پایان:",
      codes: "کدهای خطا:",
      elevators: "آسانسورها:",
      placeholders: {
        date: "انتخاب تاریخ و زمان",
        codes: "انتخاب کدهای خطا",
        elevators: "انتخاب آسانسورها",
      },
    },
    setting: {
      command: {
        save: "ذخیره",
        sendToRpi: "ارسال به دستگاه",
        receiveFromRpi: "دریافت از دستگاه",
        dlBackup: "دریافت پشتیبان",
        ulBackup: "ارسال پشتیبان",
        back: "بازگشت",
      },
      need_to_read: "ابتدا باید تنظیمات را از دستگاه بخوانید.",
      parkingPriorities: "اولویت پارکینگ",
      elevatorPriorities: "اولویت آسانسورها",
      elevatorCallLocks: "قفل شاسی های آسانسورها",
    },
    purge_dialog: {
      btn_tooltip: "پاکسازی ماژول",
      title: "پاکسازی ماژول",
      message:
        "آیا از پاکسازی این ماژول اطمینان دارید؟\n ماژول از مجتمع حذف خواهد شد و سپس آماده افزوده شدن به مجتمع جدید خواهد بود.",
    },
  },
  complex: {
    delete_dialog: {
      btn_tooltip: "حذف مجتمع",
      title: "حذف مجتمع",
      message:
        "آیا از حذف این مجتمع اطمینان دارید.\nتمام ماژول های مجتمع نیز پاکسازی خواهند شد.",
    },
  },
  user: {
    delete_dialog: {
      btn_tooltip: "حذف کاربر",
      title: "حذف کاربر",
      message:
        "آیا از حذف این کاربر اطمینان دارید.\n مجتمع آن نیز حذف خواهد شد و تمام ماژول های آن نیز پاکسازی خواهند شد.",
    },
  },
  dialogs: {
    cancel: "لغو",
    send: "ارسال",
    purge: "پاکسازی",
    delete: "حذف",
    apply: "اعمال",
    change: "تغییر",
  },
};
