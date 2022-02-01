export const content = {
    BG: {
        addNewActivityTitle: "Добавяне на фирма",
        categoryLabel: "Избери категория",
        businessTitleLabel: "Наименование на английски език",
        businessTitleBGLabel: "Наименование на български език",
        businessDescriptionLabel: "Описание на английски език",
        businessDescriptionBGLabel: "Описание на български език",
        startedDateLabel: "Дата на стартиране на бизнеса",
        websiteLabel: "Уебсайт",
        emailLabel: "Имейл",
        addImagesLabel: "Прикачи снимки",
        addressLabel: "Адрес",
        mobilePhoneLabel: "Мобилен телефон",
        phoneLabel: "Друг телефон",
        workTimeLabel: "Работно време",
        addWorkTimeLabel: "Добави ново време",
        dayLabel: "Ден",
        selectDayLabel: "Избери ден",
        timeRangeLabel: "Диапазон",
        startTimeRangeLabel: "Начален час",
        endTimeRangeLabel: "Краен час",
    },
    ENG: {
        addNewActivityTitle: "Add new company",
        categoryLabel: "Select category",
        businessTitleLabel: "Company name with english characters",
        businessTitleBGLabel: "Company name with bulgarian characters",
        businessDescriptionLabel: "Company description with english characters",
        businessDescriptionBGLabel: "Company description with bulgarian characters",
        startedDateLabel: "Business started date",
        websiteLabel: "Website",
        emailLabel: "Email",
        addImagesLabel: "Upload images",
        addressLabel: "Address",
        mobilePhoneLabel: "Mobile phone",
        phoneLabel: "Phone",
        workTimeLabel: "Work time",
        addWorkTimeLabel: "Add new time range",
        dayLabel: "Day",
        selectDayLabel: "Select day",
        timeRangeLabel: "Time range",
        startTimeRangeLabel: "Start time",
        endTimeRangeLabel: "End time",
    }
}

export const validationMessages = {
    required: {
        BG: {
            category: "Полето 'категория' е задължително!",
            title: "Полето 'наименование на английски' е задължително!",
            titleBG: "Полето 'наименование на български' е задължително!",
            description: "Полето 'описание на английски' е задължително!",
            descriptionBG: "Полето 'описание на български' е задължително!",
            address: "Полето 'адрес' е задължително!",
            dateCreated: "Полето 'дата на стартиране' е задължително!",
            website: "Полето 'уебсайт' е задължително!",
            mobilePhone: "Полето 'мобилен телефон' е задължително!",
            phone: "Полето 'телефон' е задължително!",
            worktimeDay: "Полето 'ден' е задължително!",
            worktimeTimeRange: "Въведете часови диапазон!"
        },
        ENG: {
            category: "Please input your category!",
            title: "Please input your company name!",
            titleBG: "Please input your company name with bulgarian characters!",
            description: "Please input your company description!",
            descriptionBG: "Please input your company description with bulgarian characters!",
            address: "Please input your address!",
            dateCreated: "Please input company creation date!",
            website: "Please input your website!",
            mobilePhone: "Please input your mobile phone!",
            phone: "Please input your phone!",
            worktimeDay: "Missing day",
            worktimeTimeRange: "Missing time range"
        }
    }
}

export const days = { //days should be same amount and in same order
    BG: ['Понеделник', 'Вторник', 'Сряда', 'Четвъртък', 'Петък', 'Събота', 'Неделя', 'Обедна почивка'],
    ENG: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Lunch break']
  };
  