(function(_0x1, _0x2) {
    const _0x3 = function() {
        if (document.body && (document.body.classList.contains('view-as-layout') || document.body.id === 'layout')) {
            return true;
        }
        return false;
    };

    const _0x4 = function() {
        const _0xa = () => {
            const _0xb = new URLSearchParams(location.search).get('q') || '';
            document.querySelectorAll('input[name="q"]').forEach(_0xc => {
                const _0xd = (_0xe) => {
                    const _0xf = _0xe.toLowerCase();
                    document.querySelectorAll('.LinkList:not(.footer-social), .widget.LinkList:not(#LinkList99)').forEach(_0x10 => {
                        let _0x11 = false;
                        _0x10.querySelectorAll('li').forEach(_0x12 => {
                            const _0x13 = (_0x12.textContent || _0x12.innerText).toLowerCase().includes(_0xf);
                            _0x12.style.display = _0x13 ? "" : "none";
                            if (_0x13) _0x11 = true;
                        });
                        _0x10.style.display = (_0x11 || !_0xf) ? "" : "none";
                    });
                };
                _0xc.addEventListener('input', _0x14 => _0xd(_0x14.target.value));
                if (_0xb) { _0xc.value = _0xb; _0xd(_0xb); }
            });
        };
        _0xa();
    };

    const _0x5 = function() {
        const _0x15 = console.log;
        console.log = function() {
            if (arguments[0] && typeof arguments[0] === 'string' && arguments[0].includes("\x66\x75\x6e\x63\x74\x69\x6f\x6e")) return;
            _0x15.apply(console, arguments);
        };
    };

    const _0x6 = function() {
        const _0x16 = document.documentElement;
        const _0x17 = (_0x18) => {
            const _0x19 = _0x16.getAttribute('xmlns:' + _0x18);
            if (!_0x19) return '';
            try {
                return window.atob(_0x19.trim().replace(/[^A-Za-z0-9+/=]/g, ''));
            } catch (_0x1a) { return ''; }
        };

        const _0x1b = _0x17('\x6b\x65\x79') || 'https://www.instagram.com/p/DVoGMxVDzF9/';
        const _0x1c = [_0x17('\x69\x64'), _0x17('\x76\x61\x6c'), _0x17('\x73\x6f\x63'), _0x17('\x64\x6c')];

        if (!/bot|googlebot|crawler|spider|robot|crawling/i.test(navigator.userAgent)) {
            const _0x1d = document.getElementById("\x66\x6f\x6f\x74\x65\x72\x2d\x61\x74\x74\x72\x69\x62\x75\x74\x69\x6f\x6e");
            if (!_0x1d || !_0x1b || _0x1c.some(_0x1e => !_0x1e)) return location.replace(_0x1b);
            
            const _0x1f = window.getComputedStyle(_0x1d);
            const _0x20 = _0x1f.display === "none" || _0x1f.visibility === "hidden" || _0x1f.opacity === "0" || parseFloat(_0x1f.fontSize) < 5 || parseFloat(_0x1f.height) < 10 || _0x1f.position === "absolute";
            const _0x21 = _0x1d.textContent.includes(_0x1c[0]) && _0x1d.textContent.includes(_0x1c[1]);
            const _0x22 = _0x1d.querySelector(`a[href*="${_0x1c[2]}"]`);
            const _0x23 = _0x1d.querySelector(`a[href*="${_0x1c[3]}"]`);

            if (_0x20 || !_0x21 || !_0x22 || !_0x23) return location.replace(_0x1b);
        }
        _0x4();
    };

    const _0x7 = function() {
        if (_0x3()) return;
        _0x5();
        _0x6();
    };

    if (document.readyState === '\x6c\x6f\x61\x64\x69\x6e\x67') {
        document.addEventListener('\x44\x4f\x4d\x43\x6f\x6e\x74\x65\x6e\x74\x4c\x6f\x61\x64\x65\x64', _0x7);
    } else {
        _0x7();
    }
})();
