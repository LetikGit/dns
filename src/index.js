TONCENTER_ENDPOINT_TESTNET = 'https://testnet.toncenter.com/api/v2/jsonRPC'
TONCENTER_ENDPOINT = 'https://toncenter.com/api/v2/jsonRPC'

TONCENTER_API_KEY_TESTNET = '3e9e1698b6eba0fef313e45648c3055d138195756c24523316fd8c5ff1abca17'
TONCENTER_API_KEY = '438ba5a3cbaced01b8da5b9fabcd14cd2382d67a431125e2c5d4ace714519178'

TON_ROOT_ADDRESS_TESTNET = 'EQDjPtM6QusgMgWfl9kMcG-EALslbTITnKcH8VZK1pnH3UZA'
TON_ROOT_ADDRESS = 'EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz'

TONSCAN_ENDPOINT_TESTNET = 'https://testnet.tonscan.org'
TONSCAN_ENDPOINT = 'https://tonscan.org'

MS_IN_ONE_LEAP_YEAR = 31622400000
SEC_IN_ONE_MONTH = 2592000

const localeDict = {
    ru: {
        about: 'О сервисе',
        dark_mode: 'Темная тема',
        address: 'Адрес',
        adnl: 'ADNL адрес',
        testnet_badge_message: 'Внимание, это тестовая сеть! Не отправляйте настоящие TON. Тестовые домены могут быть удалены.',
        open_auction: 'Купить домены .ton',
        start_input_placeholder: 'Введите домен',
        start_splash: 'Зарегистрируйте короткие читаемые имена для кошельков, смарт-контрактов и веб-сайтов.',
        more_info: 'Подробнее<span class="icon arrow__right unbreak"></span>',
        highest_bid: 'Текущая ставка',
        from: 'От',
        bid_step: 'Шаг ставки',
        minimum_bid: 'Минимальная ставка',
        auction_ends: 'Аукцион закончится через',
        place_bid: 'Сделать ставку',
        sale_price: 'Цена покупки',
        owner: 'Владелец',
        wallet_address: 'Адрес кошелька',
        save: 'Сохранить',
        ton_site: 'TON Site',
        subdomains: 'Поддомены',
        expires: 'Истекает <span id="expiresDate"></span>',
        edit: 'Редактировать',
        bet_price: 'Ставка',
        start_bid: 'Домен можно приобрести на открытом аукционе. Сделайте первую ставку, чтобы начать аукцион.',
        auction_duration: 'Длительность аукциона',
        bid_to_start: 'Сделайте ставку и начните аукцион',
        enter_amount: 'Введите вашу ставку',
        small_bid_error: 'Ставка слишком маленькая.',
        place_label: 'Поставить',
        place_label_2: '',
        scan_qr: 'Отсканируйте QR-код и отправьте',
        pay_mobile: 'К оплате',
        scan_qr_link: 'через Tonkeeper.',
        pay_attention: 'Используйте только <a class="unbreak" href="https://ton.org/wallets?filterBy=non_custodial" target="_blank">некастодиальные</a> кошельки для&nbsp;оплаты.',
        sent_to: 'Адрес',
        message: 'Комментарий',
        place_with_extension: 'Открыть кошелек',
        copy_link: 'Скопировать ссылку для оплаты',
        copy_link_copied: 'Ссылка скопирована!',
        place_with_app: 'Сделать ставку через Tonkeeper',
        error_length: 'Домен должен быть не менее 4 и не более 126 символов.',
        subdomains_not_allowed: 'Поддомены запрещены.',
        invalid_chars: 'В домене можно использовать английские символы (a-z), цифры (0-9) и дефис (-). Дефис не может находиться в начале и конце.',
        not_owner: 'Вы не владелец домена',
        invalid_address: 'Неправильный адрес',
        install_extension: 'Установите расширение TON Wallet для управления доменом',
        auction: 'Аукцион',
        free: 'Свободен',
        busy: 'Занят',
        update_extension: 'Обновите расширение TON Wallet',
        install_web_extension: 'Установить TON Wallet',
        install_tonkeeper: 'Установить Tonkeeper',
        claim_your_domain: 'Как настроить домен?',
        manage_domain: 'Редактировать',
        manage_domain_mobile: 'Редактировать в Tonkeeper',
        use_other_payments: 'Другие способы оплаты <svg class="arrow icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '                    <path d="M16 15L11.5 10L7 15" stroke="#0088CC" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
            '                </svg>',
        storage_checkbox: "Хостинг на TON Storage",
    },
    en: {
        address: 'Address',
        adnl: 'ADNL address',
        save: 'Save',
        start_input_placeholder: 'Type the domain you want',
        start_splash: 'Give crypto wallets, smart contracts or websites short readable names.',
        error_length: 'The domain name must be at least 4 characters and no more than 126 characters.',
        subdomains_not_allowed: 'Subdomains are not allowed.',
        invalid_chars: 'English letters (a-z), numbers (0-9), and hyphens (-) are allowed. A hyphen cannot be at the beginning or the end.',
        not_owner: 'You are not the owner of this domain.',
        invalid_address: 'The address is invalid.',
        install_extension: 'Please install the TON Wallet extension to edit the domain',
        auction: 'On auction',
        free: 'Available',
        busy: 'Taken',
        update_extension: 'Please update your TON Wallet extension',
    },
}

const browserLang = navigator.language || navigator.userLanguage
const lang = (browserLang === 'ru-RU') || (browserLang === 'ru') || (browserLang === 'be-BY') || (browserLang === 'be') || (browserLang === 'kk-KZ') || (browserLang === 'kk') ? 'ru' : 'en';
const locale = localeDict[lang]

if (lang !== 'en') {
    $('.start-input').placeholder = locale.start_input_placeholder
    $('#navInput input').placeholder = locale.start_input_placeholder
    document.querySelectorAll('[data-locale]').forEach((div) => {
        const key = div.attributes['data-locale'].value
        div.innerHTML = locale[key]
    })
}

const IS_TESTNET = window.location.href.indexOf('testnet=true') > -1

const AUCTION_START_TIME = IS_TESTNET ? 1659125865 : 1659171600

const tonscanUrl = IS_TESTNET ? TONSCAN_ENDPOINT_TESTNET : TONSCAN_ENDPOINT

const toncenterUrl = IS_TESTNET
    ? TONCENTER_ENDPOINT_TESTNET
    : TONCENTER_ENDPOINT

const tonRootAddress = IS_TESTNET
    ? new TonWeb.Address(
        TON_ROOT_ADDRESS_TESTNET
    ).toString(true, true, true, true)
    : TON_ROOT_ADDRESS // .ton root smart contract in bounceable form

const tonweb = new TonWeb(
    new TonWeb.HttpProvider(toncenterUrl, {
        apiKey: IS_TESTNET
            ? TONCENTER_API_KEY_TESTNET
            : TONCENTER_API_KEY,
    })
)

const dnsCollection = new TonWeb.dns.DnsCollection(tonweb.provider, {
    address: tonRootAddress,
})

if (IS_TESTNET) {
    toggle('.testnet-badge', true, 'flex')
}

// UI
let updateIntervalId = 0
let auctionTimerIntervalId = 0
let freeQrUrl = null
let auctionQrUrl = null
let currentDomain = null
let currentOwner = null
let currentDnsItem = null
let previousBid = null
const removeListeners = {}

const clear = () => {
    clearInterval(updateIntervalId)
    clearInterval(auctionTimerIntervalId)
    freeQrUrl = null
    auctionQrUrl = null
    currentDomain = null
    currentOwner = null
    currentDnsItem = null
    $('#busyDomainScreen').classList.remove('edit-expand')
    $('#busyDomainScreen').classList.remove('edit-loading')
    $('.main').classList.remove('edit-expand')
    $('.main').classList.remove('edit-loading')
}

$('.badge__dns').addEventListener('click', () => {
    clear()
    window.history.pushState('', 'TON DNS ', '#')
    setScreen('startScreen')
})

$('.badge__dns-mobile').addEventListener('click', () => {
    clear()
    closeMenu()
    window.history.pushState('', 'TON DNS ', '#')
    setScreen('startScreen')
})

// SET DOMAIN

const validateDomain = (domain) => {
    if (domain.length < 4 || domain.length > 126) {
        return locale.error_length
    }

    for (let i = 0; i < domain.length; i++) {
        if (domain.charAt(i) === '.') {
            return locale.subdomains_not_allowed
        }
        const char = domain.charCodeAt(i)
        const isHyphen = char === 45
        const isValidChar =
            (isHyphen && i > 0 && i < domain.length - 1) ||
            (char >= 48 && char <= 57) ||
            (char >= 97 && char <= 122) // '-' or 0-9 or a-z ;  abcdefghijklmnopqrstuvwxyz-0123456789

        if (!isValidChar) {
            return locale.invalid_chars
        }
    }
}

const setDomain = (domain) => {
    scrollToTop()
    currentDomain = domain

    const loadDomain = async (setShimmers) => {
        if (setShimmers) {
            unmountTimer()
            setScreen('domainLoadingScreen')
            renderDomainLoadingScreen()
        } else {
            if (ACTIVE_SCREEN ==='auctionDomainScreen') {
                renderStatusLoading()
            }
        }

        const domainAddress = await dnsCollection.resolve(
            domain,
            TonWeb.dns.DNS_CATEGORY_NEXT_RESOLVER,
            true
        )
        const domainAddressString = domainAddress.toString(
            true,
            true,
            true,
            IS_TESTNET
        )
        const accountInfo = await tonweb.provider.getAddressInfo(
            domainAddressString
        )

        let dnsItem
        let domainExists = accountInfo.state === 'active'
        let ownerAddress = null

        if (domainExists) {
            dnsItem = new TonWeb.dns.DnsItem(tonweb.provider, {
                address: domainAddress,
            })
            const data = await dnsItem.methods.getData()
            if (!data.isInitialized) {
                domainExists = false
            } else {
                ownerAddress = data.ownerAddress
            }
        }
        let auctionInfo = null
        if (domainExists && !ownerAddress) {
            auctionInfo = await dnsItem.methods.getAuctionInfo()
            if (auctionInfo.auctionEndTime < Date.now() / 1000) {
                ownerAddress = auctionInfo.maxBidAddress
            }
        }
        let lastFillUpTime = 0
        if (domainExists && ownerAddress) {
            lastFillUpTime = await dnsItem.methods.getLastFillUpTime()
        }

        if (currentDomain === domain) {
            if (!domainExists) {
                storeDomainStatus('free')
                renderFreeDomain(domain)
                setScreen('freeDomainScreen')
            } else if (ownerAddress) {
                currentOwner = ownerAddress.toString(true, true, true, IS_TESTNET)
                currentDnsItem = dnsItem
                storeDomainStatus('busy')
                renderBusyDomain(
                    domain,
                    domainAddressString,
                    ownerAddress.toString(true, true, true, IS_TESTNET),
                    lastFillUpTime
                )
                setScreen('busyDomainScreen')
            } else {
                storeDomainStatus('auction')
                renderAuctionDomain(domain, domainAddressString, auctionInfo)
                setScreen('auctionDomainScreen')
            }
        }
    }

    clearInterval(auctionTimerIntervalId)
    freeQrUrl = null
    auctionQrUrl = null
    currentOwner = null
    currentDnsItem = null
    $('#busyDomainScreen').classList.remove('edit-expand')
    $('#busyDomainScreen').classList.remove('edit-loading')
    $('.main').classList.remove('edit-expand')
    $('.main').classList.remove('edit-loading')
    $('#navInput input').value = ''
    $('.start-input').value = ''
    setCareeteHelperValue('')

    setDomainName(domain, $('#domainName'))
    setScreen('main')

    clearInterval(updateIntervalId)
    updateIntervalId = setInterval(() => loadDomain(), 10 * 1000)
    loadDomain(true)
}

let currentDomainStatus = null

const storeDomainStatus = (status) => {
    if (status !== currentDomainStatus) {
        closeBidModal()
    }

    currentDomainStatus = status
}

function closeBidModal() {
    toggle('.bid__modal--backdrop', false, 'flex', true, 200)
    toggle('.bid__modal', false)
    toggle('.bid__modal--first__step', false)
    toggle('.bid__modal--second__step', false)

    $('#otherPaymentsMethods svg').classList.remove('rotate')
    $('#otherPaymentsMethodsContainer').classList.remove('show')
    $('body').classList.remove('scroll__disabled')
    $('#otherPaymentsMethods').removeEventListener('click', renderOtherPaymentsMethods)
}

const onInput = (e) => {
    if (e.key === 'Enter') {
        let domain = e.target.value.toLowerCase().trim()
        if (domain.endsWith('.ton')) {
            domain = domain.substring(0, domain.length - 4)
        }
        const error = validateDomain(domain)
        if (error) {
            setError($('.start-error'), error)
            closeHistoryContainer(e.target)
        } else {
            const history = getHistoryFromStorage().filter((item) => item !== domain)
            history.unshift(domain);

            setDomainToBrowserHistory(domain)
            setDomain(domain)
            setHistoryToStorage(history.slice(0, 4))
            closeHistoryContainer(e.target)
        }

        hideKeyboard();
    } else {
        resetError($('.start-error'))
    }
}

$('.start-input').addEventListener('input', (e) => {
    setCareeteHelperValue(e.target.value)
})

$('.start-input').addEventListener('keydown', onInput)

$('#navInput input').addEventListener('keydown', onInput)

const processUrl = () => {
    const backdrop = $('.bid__modal--backdrop')

    if (backdrop.style.display === 'flex') {
        closeBidModal()

        return;
    }

    const domainFromUrl = decodeURIComponent(window.location.hash.substring(1)).toLowerCase()

    if (domainFromUrl === currentDomain) {
        return;
    }

    clear()

    if (domainFromUrl) {
        const error = validateDomain(domainFromUrl)

        if (error) {
            setScreen('startScreen')
        } else {
            setDomain(domainFromUrl)
        }
    } else {
        setScreen('startScreen')
    }
}
processUrl()

window.onpopstate = () => processUrl()

// RENDER UI

function renderDomainLoadingScreen() {
    $('.main').classList.toggle('main--loading')
}

let timeoutId = null;

function renderStatusLoading() {
    if (timeoutId) {
        return;
    }

    $('#domainStatus').classList.add('loading')

    timeoutId = setTimeout(() => {
        clearTimeout(timeoutId)
        timeoutId = null;
        $('#domainStatus').classList.remove('loading')
    }, 2000)

}

const renderAuctionDomain = (domain, domainItemAddress, auctionInfo) => {
    const auctionEndTime = auctionInfo.auctionEndTime // unixtime
    const bestBidAmount = auctionInfo.maxBidAmount
    const bestBidAddress = auctionInfo.maxBidAddress.toString(
        true,
        true,
        true,
        IS_TESTNET
    )

    $('#auction-bid-flip-clock-container').dataset.endDate = new Date(auctionEndTime * 1000)
    initFlipTimer('#auction-bid-flip-clock-container', true)

    getCoinPrice().then((price) => {
        const auctionAmount = TonWeb.utils.fromNano(bestBidAmount)

        if (previousBid !== auctionAmount) {
            closeBidModal()
        }

        previousBid = auctionAmount


        $('#auctionAmount').innerText = formatNumber(auctionAmount, false)
        $('#auctionAmountConverted').innerText = formatNumber(auctionAmount * price, 2)
        setAddress($('#auctionOwnerAddress'), bestBidAddress)

        const minBet = TonWeb.utils.fromNano(
            bestBidAmount.mul(new TonWeb.utils.BN(105)).div(new TonWeb.utils.BN(100))
        )

        $('#auctionMinBet').innerText = formatNumber(minBet, false)
        $('#auctionMinBetConverted').innerText = formatNumber(minBet * price, 2)

        const bidStep = TonWeb.utils.fromNano(
            bestBidAmount
                .mul(new TonWeb.utils.BN(105))
                .div(new TonWeb.utils.BN(100))
                .sub(bestBidAmount)
        )
        const bidStepToPercent = (bidStep / auctionAmount) * 100

        $('#auctionBidStep').innerText = formatNumber(bidStep, false)
        $('#auctionBidStepConverted').innerText = formatNumber(bidStepToPercent.toFixed(2))

        attachBidModalListeners(domain, minBet, '#auctionBtn', domainItemAddress)
    })
}

const renderFreeDomain = (domain) => {
    getCoinPrice().then((price) => {
        const salePrice = TonWeb.utils.fromNano(getMinPrice(domain))

        $('#freeMinBet').innerText = formatNumber(salePrice, false)
        $('#freeMinBetConverted').innerText = formatNumber(salePrice * price, 2)

        $('#bid-flip-clock-container').dataset.endDate = new Date(
            Date.now() + getAuctionDuration() * 1000
        ).toISOString()
        initFlipTimer('#bid-flip-clock-container', false)

        attachBidModalListeners(domain, salePrice, '#bidButton')
    })
}

const renderBusyDomain = (
    domain,
    domainItemAddress,
    ownerAddress,
    lastFillUpTime
) => {
    setAddress($('#busyOwnerAddress'), ownerAddress)
    const expiresDate = new Date(lastFillUpTime * 1000 + MS_IN_ONE_LEAP_YEAR)

    $('#expiresDate').innerText = expiresDate.toISOString().slice(0,10).split('-').reverse().join(".")
    $('#flip-clock-container').dataset.endDate = expiresDate
    initFlipTimer('#flip-clock-container', true)
}

const renderSearchHistory = (node) => {
    const historyContainer = renderHistoryContainer(node)
    const history = getHistoryFromStorage()

    if (!historyContainer) {
        return
    }

    node.classList.add('focus')

    if (!history.length) {
        node.addEventListener('blur', handleBlur)
        historyContainer.style.display = 'none'
        return
    }

    toggle('.start-error', false)

    try {
        const historyMarkup = getHistoryFromStorage().map(
            (historyRecord) =>
                `<button class="hover__button" data-record="${historyRecord}">
                    <svg class="icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.99939 12C2.99939 7.02944 7.02883 3 11.9994 3C16.97 3 20.9994 7.02944 20.9994 12C20.9994 16.9706 16.97 21 11.9994 21C9.44416 21 7.13764 19.9351 5.49939 18.225" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M0.999981 10.9999L2.98998 13.4399L4.97998 10.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12.0273 7.15381V12.3461H17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="text--overflow__hidden" data-record="${historyRecord}">
                    	<span>${historyRecord}</span>
                    </div>
                    <svg data-record="${historyRecord}" class="icon history__record remove" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00012 18L18.0001 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                        <path d="M6.00012 6L17.9986 18.0015" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>
            `
        )

        historyContainer.innerHTML = historyMarkup.join('')
        toggleByNode(historyContainer, true, 'block')
    } catch (e) {
        console.log(e)
        return
    }

    const handleClickOutside = (e) => {
        if (!node.parentNode.contains(e.target)) {
            removeListeners()
            closeHistoryContainer(node)
            handleBlur()
        }
    }

    const onHistoryRecordClick = (e) => {
        e.preventDefault()
        e.stopPropagation()

        const shouldBeClosed = e.target.classList.contains('remove')
            || e.target.parentNode.classList.contains('remove')

        if (shouldBeClosed) {
            const domain = e.target.parentNode.dataset.record
            let historyFromStorage = getHistoryFromStorage()

            if (historyFromStorage.includes(domain)) {
                historyFromStorage.splice(historyFromStorage.indexOf(domain), 1)
            }

            setHistoryToStorage(historyFromStorage)
            removeListeners()
            renderSearchHistory(node)

            historyFromStorage = getHistoryFromStorage()

            if (!historyFromStorage.length) {
                node.classList.remove('focus')
            }

            return
        }

        const domain = e.target.parentNode.dataset.record || e.target.dataset.record

        if (!domain) {
            return
        }

        setDomainToBrowserHistory(domain)
        setDomain(domain)
        closeHistoryContainer(node)
    }

    const removeListeners = () => {
        historyContainer.removeEventListener('click', onHistoryRecordClick, false)
        window.removeEventListener('mousedown', handleClickOutside, false)
        window.removeEventListener('touchstart', handleClickOutside, false)
    }

    function handleBlur() {
        node.classList.remove('focus')
        hideKeyboard()
    }

    removeListeners()

    historyContainer.addEventListener('click', onHistoryRecordClick, false)
    window.addEventListener('mousedown', handleClickOutside, false)
    window.addEventListener('touchstart', handleClickOutside, false)
}

const attachBidModalListeners = (domain, price, modalButton, address) => {
    if (removeListeners[modalButton]) {
        removeListeners[modalButton]()
    }

    let localPrice = price;
    const bidAddress = address || tonRootAddress;
    const bidModalInput = $("#bid__modal--bid__input")
    const submitStepButton = $("#bid__modal--submit__step")
    const submitPriceLabel = $("#bid__modal--submit__price")
    const convertedPriceSlot = $("#bid__input--converted__price")
    const error = $(".bid__input--error")
    const backdrop = $('.bid__modal--backdrop')
    const showOtherPaymentMethods = $('#otherPaymentsMethods')

    const mask = IMask(bidModalInput, {
        mask: Number,
        signed: false,
        min: 0,
        scale: 100,
        radix: '.',
        mapToRadix: [','],
    });

    const handleBidInput = (e) => {
        e.preventDefault()
        e.stopPropagation()

        localPrice = Number(e.target.value)
        let priceToConvert = localPrice

        if (localPrice >= price) {
            setSubmitPriceLabel(submitPriceLabel, formatNumber(localPrice, false))
        } else {
            setSubmitPriceLabel(submitPriceLabel, formatNumber(price, false))
            priceToConvert = price
        }

        if (Number(localPrice) < Number(price)) {
            submitStepButton.setAttribute('disabled', true)
            convertedPriceSlot.style.display = 'none'
            error.style.display = 'block'
        } else {
            submitStepButton.removeAttribute('disabled')
            convertedPriceSlot.style.display = 'block'
            error.style.display = 'none'

            debouncedRenderConvertedTonPrice(convertedPriceSlot, priceToConvert)
        }
    }

    const handleModalClose = (e) => {
        localPrice = price;

        if (!e.target.classList.contains('bid__modal--backdrop')) {
            return;
        }

        history.back()
        hideKeyboard()

        toggle('.bid__modal--first__step', false)
        toggle('.bid__modal--second__step', false)
        toggle('.bid__modal', false)
        toggle('.bid__modal--backdrop', false, 'flex', true, 200)
        $('#otherPaymentsMethodsContainer').classList.remove('show')
        $('#otherPaymentsMethods svg').classList.remove('rotate')

        bidModalInput.removeEventListener('input', handleBidInput)
        backdrop.removeEventListener('click', handleModalClose)
        submitStepButton.removeEventListener('click', renderSecondStep)
        submitStepButton.removeEventListener('click', renderSecondStep)
        $('body').classList.remove('scroll__disabled')
    }

    const toggleBidModal = (e) => {
        e.preventDefault()
        e.stopPropagation()
        scrollToTop()
        backdrop.addEventListener('click', handleModalClose)

        toggle('.bid__modal--backdrop', true)
        toggle('.bid__modal', true)
        toggle('.bid__modal--first__step', true)
        toggle('.bid__modal--second__step', false)
        $('body').classList.add('scroll__disabled')
        pushModalInfoToBrowserHistory('bid__modal')
        renderFirstStep()
    }

    const renderFirstStep = () => {
        const svgNode = submitPriceLabel.parentNode.querySelector('svg');
        svgNode.parentNode.querySelector('svg').style.display = 'block';
        $('#domainName--bid__modal').innerText = domain + '.ton'
        bidModalInput.setAttribute('value', localPrice);
        bidModalInput.value = localPrice;
        mask.updateValue()

        submitStepButton.removeAttribute('disabled')
        convertedPriceSlot.style.display = 'block'
        error.style.display = 'none'

        bidModalInput.addEventListener('keypress', (e) => {
            if (e.key === "Enter" && !submitStepButton.getAttribute('disabled')) {
                renderSecondStep()
                hideKeyboard();
            }
        })
        submitStepButton.addEventListener('click', renderSecondStep)
        submitPriceLabel.innerText = formatNumber(localPrice)
        renderConvertedTonPrice(convertedPriceSlot, localPrice);

        bidModalInput.addEventListener('input', handleBidInput)
    }

    const renderSecondStep = () => {
        toggle('.bid__modal--first__step', false)
        toggle('.bid__modal--second__step', true)

        setAddress($('#freeBuyAddress'), bidAddress)

        showOtherPaymentMethods.removeEventListener('click', renderOtherPaymentsMethods)
        showOtherPaymentMethods.addEventListener('click', renderOtherPaymentsMethods)
    }

    // update bid modal payemnt data
    $('#domainName--bid__modal--payment').innerText = domain + '.ton'
    $('#freeComment').innerText = domain
    $('#freeComment').dataset.name = domain

    $('#bidPrice').innerText = formatNumber(localPrice, false)
    const isExtensionInstalled = !isMobile() && window.ton
    const buyUrl = 'ton://transfer/' + bidAddress + '?text=' + encodeURIComponent(domain) + '&amount=' + encodeURIComponent(localPrice * 1000000000)

    if (isExtensionInstalled) {
        $('#freeBtn').href = buyUrl
    } else {
        $('#freeBtn').href = 'https://app.tonkeeper.com/transfer/' + bidAddress + '?text=' + encodeURIComponent(domain) + '&amount=' + encodeURIComponent(localPrice * 1000000000)
    }

    if (isMobile()) {
        $('#freeBtn').href = buyUrl
    }

    $('#tonkeeperButton').href = 'https://app.tonkeeper.com/transfer/' + bidAddress + '?text=' + encodeURIComponent(domain) + '&amount=' + encodeURIComponent(localPrice * 1000000000)
    $('#copyLinkbutton').setAttribute('address', buyUrl)

    if (freeQrUrl !== buyUrl) {
        freeQrUrl = buyUrl
        renderQr('#freeQr', 'https://app.tonkeeper.com/transfer/' + bidAddress + '?text=' + encodeURIComponent(domain) + '&amount=' + encodeURIComponent(localPrice * 1000000000))
    }

    $(modalButton).addEventListener('click', toggleBidModal, false)
    showOtherPaymentMethods.addEventListener('click', renderOtherPaymentsMethods)

    removeListeners[modalButton] = () => {
        $(modalButton).removeEventListener('click', toggleBidModal, false)
        showOtherPaymentMethods.removeEventListener('click', renderOtherPaymentsMethods)
    }
}

function renderOtherPaymentsMethods() {
    const svgArrow = $('#otherPaymentsMethods svg')
    const otherPaymentsContainer = $('#otherPaymentsMethodsContainer')

    if (svgArrow.classList.contains('rotate')) {
        svgArrow.classList.remove('rotate')
    } else {
        svgArrow.classList.add('rotate')
    }

    if (otherPaymentsContainer.classList.contains('show')) {
        otherPaymentsContainer.classList.remove('show')
    } else {
        otherPaymentsContainer.classList.add('show')
    }
}

const renderConvertedTonPrice = (node, priceToCovert) => {
    getCoinPrice().then((price) => {
        node.innerText = formatNumber(priceToCovert * price, 2)
    })
}

const debouncedRenderConvertedTonPrice = debounce(renderConvertedTonPrice, 500);

const renderHistoryContainer = (node) => {
    let historyContainer = node.parentNode.querySelector('.suggestions-container')

    if (historyContainer) {
        return historyContainer
    }

    historyContainer = document.createElement('div')
    historyContainer.classList.add('suggestions-container')
    node.parentNode.appendChild(historyContainer)

    return historyContainer
}

const closeHistoryContainer = (node) => {
    const historyContainer = renderHistoryContainer(node)
    toggleByNode(historyContainer, false, 'flex', true, 100)
    historyContainer.style.display = 'none'
    node.classList.remove('focus')
}

const createEditBtn = (containerName) => {
    const container = $(containerName)
    container.innerHTML = ''
    const btn = document.createElement('a')
    btn.innerText = locale.save
    btn.classList.add('edit-btn')
    container.appendChild(btn)
    return btn
}

const connectExtension = async (domain, dnsItem) => {
    const provider = window.ton

    if (!provider) {
        alert(locale.install_extension)
        return
    }


    if (!window.tonProtocolVersion || window.tonProtocolVersion < 1) {
        alert(locale.update_extension)
        return
    }


    const accounts = await provider.send('ton_requestAccounts')
    const account = new TonWeb.Address(accounts[0]).toString(
        true,
        true,
        true,
        IS_TESTNET
    )

    if (account !== currentOwner) {
        alert(locale.not_owner)
        return
    }

    $('#busyDomainScreen').classList.add('edit-loading')
    $('.main').classList.add('edit-loading')

    try {
        const dnsRecordWallet = await dnsItem.resolve(
            '.',
            TonWeb.dns.DNS_CATEGORY_WALLET
        )
        const dnsRecordSite = await dnsItem.resolve(
            '.',
            TonWeb.dns.DNS_CATEGORY_SITE
        )
        const isSiteInStorage = dnsRecordSite instanceof TonWeb.utils.StorageBagId;
        const dnsRecordStorage = await dnsItem.resolve(
            '.',
            TonWeb.dns.DNS_CATEGORY_STORAGE
        )
        const dnsRecordResolver = await dnsItem.resolve(
            '.',
            TonWeb.dns.DNS_CATEGORY_NEXT_RESOLVER
        )

        if (domain === currentDomain) {
            $('#editWalletRow input').value = dnsRecordWallet
                ? dnsRecordWallet.toString(true, true, true, IS_TESTNET)
                : ''
            $('#editAdnlRow input').value = dnsRecordSite ? dnsRecordSite.toHex() : ''
            $('#siteStorage').checked = isSiteInStorage
            $('#editStorageRow input').value = dnsRecordStorage ? dnsRecordStorage.toHex() : ''
            $('#editResolverRow input').value = dnsRecordResolver
                ? dnsRecordResolver.toString(true, true, true, IS_TESTNET)
                : ''

            const setTx = async (key, value) => {
                const dataCell = await TonWeb.dns.DnsItem.createChangeContentEntryBody({
                    category: key,
                    value: value,
                })
                const data = TonWeb.utils.bytesToBase64(await dataCell.toBoc(false))

                provider.send('ton_sendTransaction', [
                    {
                        to: (await dnsItem.getAddress()).toString(
                            true,
                            true,
                            true,
                            IS_TESTNET
                        ),
                        value: TonWeb.utils.toNano('0.05').toString(),
                        data: data,
                        dataType: 'boc',
                    },
                ])
            }

            $('#editWalletRow input').placeholder = locale.address

            createEditBtn('#editWalletRow .edit__button').addEventListener(
                'click',
                () => {
                    const value = $('#editWalletRow input').value
                    if (!value || TonWeb.Address.isValid(value)) {
                        setTx(
                            TonWeb.dns.DNS_CATEGORY_WALLET,
                            value
                                ? TonWeb.dns.createSmartContractAddressRecord(
                                    new TonWeb.Address(value)
                                )
                                : null
                        )
                    } else {
                        alert(locale.invalid_address)
                    }

                    hideKeyboard()
                }
            )

            $('#editAdnlRow input').placeholder = locale.adnl


            createEditBtn('#editAdnlRow .edit__button').addEventListener('click', () => {
                const value = $('#editAdnlRow input').value // hex
                let record = null
                if (value) {
                    try {
                        if ($('#siteStorage').checked) {
                            const bagId = new TonWeb.utils.StorageBagId(value)
                            record = TonWeb.dns.createStorageBagIdRecord(bagId)
                        } else {
                            const adnlAddress = new TonWeb.utils.AdnlAddress(value)
                            record = TonWeb.dns.createAdnlAddressRecord(adnlAddress)
                        }
                    } catch (e) {
                        console.error(e)
                        alert(locale.invalid_address)
                        return
                    }
                }

                setTx(TonWeb.dns.DNS_CATEGORY_SITE, value ? record : null)
            })

            createEditBtn('#editStorageRow .edit-btn').addEventListener('click', () => {
                const value = $('#editStorageRow input').value; // hex

                let record = null;
                if (value) {
                    try {
                        const bagId = new TonWeb.utils.StorageBagId(value);
                        record = TonWeb.dns.createStorageBagIdRecord(bagId);
                    } catch (e) {
                        console.error(e);
                        alert(locale.invalid_address);
                        return;
                    }
                }

                setTx(TonWeb.dns.DNS_CATEGORY_STORAGE, value ? record : null);
            });

            $('#editResolverRow input').placeholder = locale.address

            createEditBtn('#editResolverRow .edit__button').addEventListener(
                'click',
                () => {
                    const value = $('#editResolverRow input').value
                    if (!value || TonWeb.Address.isValid(value)) {
                        setTx(
                            TonWeb.dns.DNS_CATEGORY_NEXT_RESOLVER,
                            value
                                ? TonWeb.dns.createNextResolverRecord(new TonWeb.Address(value))
                                : null
                        )
                    } else {
                        alert(locale.invalid_address)
                    }
                }
            )
        }
    } catch (e) {
        console.error(e)
        $('#busyDomainScreen').classList.remove('edit-loading')
        $('.main').classList.remove('edit-loading')
        return
    }

    $('#busyDomainScreen').classList.remove('edit-loading')
    $('#busyDomainScreen').classList.add('edit-expand')
    $('.main').classList.remove('edit-loading')
    $('.main').classList.add('edit-expand')
}

$('#connectBtn').addEventListener('click', () => connectExtension(currentDomain, currentDnsItem))

$(".reset__input--icon").addEventListener('click', (e) => {
    e.preventDefault()
    e.stopPropagation()
    $('.start-input').value = ''
    resetError($('.start-error'))
})

// COMMON
var oldStartInputValue = '';

function setCareeteHelperValue(value) {
    const helper = $('.careete__helper');
    const windowWidth = window.innerWidth;

    const resetInputIcon = $('.icon.reset__input--icon')
    const careeteHelper = $('.start-input-container__domain--container')
    const careeteHelperText = $('.start-input-container__domain')

    if (value !== oldStartInputValue) {
        oldStartInputValue = value;
        helper.innerText = value;
        const {width} = helper.getBoundingClientRect();

        if (careeteHelper) {
            careeteHelper.style.left = `${(windowWidth > 568 ? 72 : 56) + width}px`

            const iconDimensions = resetInputIcon.getBoundingClientRect();
            const careeteHelperDimensions = careeteHelperText.getBoundingClientRect();

            if (careeteHelperDimensions.x > iconDimensions.x - careeteHelperDimensions.width) {
                careeteHelper.style.visibility = 'hidden';
            } else {
                careeteHelper.style.visibility = 'visible';
            }
        }
    }
}

$('.start-input-container__domain--container').addEventListener('click', () => {
    $('.start-input').focus();
})

document.querySelectorAll('.copy__addr').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        copyToClipboard(
            e.target.parentNode.querySelector('.addr').dataset.dataAddress,
            e.target.parentNode.querySelector('button'),
        );
    })
})

let prevInterval = null;

document.querySelector('#copyLinkbutton').addEventListener('click', () => {
    copyToClipboard(
        $('#copyLinkbutton').getAttribute('address'),
        null,
        false
    ).then(() => {
        if (prevInterval) {
            return;
        }

        $('#copyLinkbutton').classList.add('copied')

        prevInterval = setTimeout(() => {
            $('#copyLinkbutton').classList.remove('copied')

            prevInterval = null;
        }, 1000)
    });
})

document.querySelector('.copy__name').addEventListener('click', (e) => {
    copyToClipboard(
        document.getElementById('freeComment').dataset.name,
        e.target,
    );
})

document.querySelectorAll('.addr').forEach((node) => {
    node.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        window.open(tonscanUrl + '/address/' + node.dataset.dataAddress, '_blank')
    })
})

let prevTimeoutId = null;

document.querySelectorAll("input:not([type=checkbox])").forEach((node) => {
    node.addEventListener(('mousedown'), (e) => {
        e.target.classList.add('input__clicked')

        if (prevTimeoutId) {
            clearTimeout(prevTimeoutId)
        }

        prevTimeoutId = setTimeout(() => {
            if (e.target.classList.contains('input__clicked')) {
                e.target.classList.remove('input__clicked')
            }
        }, 500)
    })
})

document.querySelectorAll('input').forEach((node) => {
    node.addEventListener(('mouseup'), (e) => {
        e.target.classList.remove('input__clicked')
    })
})

const handleWindowResize = () => {
    setAppHeight()
    oldStartInputValue = ''
    setCareeteHelperValue($('.start-input').value)
}

const debouncedHandleWindowResize = debounce(handleWindowResize, 100)

window.addEventListener('resize', debouncedHandleWindowResize)

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.suggestions__input').forEach((input) => {
        input.addEventListener('focus', (e) => {
            renderSearchHistory(input)
        })
    })
    setAppHeight()

    if (BROWSER === 'Safari') {
        $('body').classList.add('safari')
    }
})

function renderBusyScreenSubmitButton() {
    const isDesktop = !isMobile();
    /*
    * - Chrome
    * - Opera
    * - Brave
    * - Edge
    * - Vivaldi Browser
    * */
    if (isDesktop) {
        const supportsExtension = ['Chrome', 'Mozilla Firefox', 'Opera', 'MS Edge'].includes(BROWSER);
        const isExtensionInstalled = Boolean(window.ton)

        if (supportsExtension) {
            if (isExtensionInstalled) {
                const invalidExtensionVersion = !window.tonProtocolVersion || window.tonProtocolVersion < 1

                if (invalidExtensionVersion) {
                    alert(locale.update_extension)
                    return;
                }
                return;
            } else {
                $('#connectBtn').style.display = 'inline-flex'
            }
        } else {
            $('#connectBtn').style.display = 'none'
        }
    }
}

renderBusyScreenSubmitButton()
