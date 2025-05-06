function ShowInfoModal(title, description, closeText) {
  return new Promise((resolve) => {
	  const modalHTML = `
	  <div class="layerContainer_da8173">
		<div class="backdrop__78332 withLayer__78332 modal-backdrop" style="background: rgba(0, 0, 0, 0); backdrop-filter: blur(3px); transition: background 200ms ease, opacity 200ms ease; opacity: 0; position: fixed; inset: 0; z-index: 9998;"></div>
		<div class="layer_bc663c" style="position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 9999;">
		  <div class="focusLock__49fc1" role="dialog" tabindex="-1" aria-modal="true">
			<div class="container__468a6 root__49fc1 fullscreenOnMobile__49fc1 rootWithShadow__49fc1 modal-container" style="opacity: 0; transform: scale(0.95); transition: transform 200ms ease, opacity 200ms ease; max-width: 400px; box-shadow: 0 0 20px rgba(0,0,0,0.2); border-radius: 8px;">
			  <form class="form__468a6">
				<div class="flex__7c0ba horizontal__7c0ba justifyStart_abf706 alignCenter_abf706 noWrap_abf706 header__49fc1 separator__49fc1">
				  <h1 class="defaultColor__4bd52 heading-lg/semibold_cf4812 defaultColor__5345c title__468a6 modal-title"></h1>
				</div>
				<div class="content__49fc1 modalContent__468a6 thin_d125d2 scrollerBase_d125d2" style="overflow: auto; max-height: 200px; margin-top: 12px;">
				  <div class="flex__7c0ba vertical_abf706 justifyStart_abf706 alignStretch_abf706 noWrap_abf706 content__468a6">
					<div class="text-md/normal_cf4812 body__468a6 modal-description" style="color: #72767d;"></div>
				  </div>
				</div>
				<div class="flex__7c0ba horizontalReverse__7c0ba justifyStart_abf706 alignStretch_abf706 wrap_abf706 footer__49fc1 footerSeparator__49fc1" style="margin-top: 16px;">
				  <button type="button" class="primaryButton__468a6 button__201d5 lookFilled__201d5 colorBrand__201d5 sizeMedium__201d5 grow__201d5 modal-close" style="background: #5865f2; color: white; border: none; border-radius: 4px; cursor: pointer;">
					<div class="contents__201d5"></div>
				  </button>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
	  `;

	  const wrapper = document.createElement('div');
	  wrapper.innerHTML = modalHTML;
	  document.body.appendChild(wrapper);

	  const modal = wrapper.querySelector('.modal-container');
	  const backdrop = wrapper.querySelector('.modal-backdrop');
	  wrapper.querySelector('.modal-title').textContent = title;
	  wrapper.querySelector('.modal-description').textContent = description;
	  wrapper.querySelector('.modal-close .contents__201d5').textContent = closeText;

	  modal.style.transform = 'scale(0.35)';
	  backdrop.style.opacity = '0';

	  requestAnimationFrame(() => {
		modal.style.opacity = '1';
		modal.style.transform = 'scale(1)';
		backdrop.style.opacity = '1';
		backdrop.style.background = 'rgba(0, 0, 0, 0.7)';
	  });

	  wrapper.querySelector('.modal-close').onclick = () => {
		modal.style.opacity = '0';
		modal.style.transform = 'scale(0)';
		backdrop.style.opacity = '0';
		backdrop.style.background = 'rgba(0, 0, 0, 0)';
		setTimeout(() => wrapper.remove(), 200);
		resolve(null);
	  };
  });
}

function ShowIFrameModal(title, url, closeText) {
  return new Promise((resolve) => {
	  const modalHTML = `
	  <div class="layerContainer_da8173">
		<div class="backdrop__78332 withLayer__78332 modal-backdrop" style="background: rgba(0, 0, 0, 0); backdrop-filter: blur(3px); transition: background 200ms ease, opacity 200ms ease; opacity: 0; position: fixed; inset: 0; z-index: 9998;"></div>
		<div class="layer_bc663c" style="position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 9999;">
		  <div class="focusLock__49fc1" role="dialog" tabindex="-1" aria-modal="true">
			<div class="container__468a6 root__49fc1 fullscreenOnMobile__49fc1 rootWithShadow__49fc1 modal-container" style="opacity: 0; transform: scale(0.95); transition: transform 200ms ease, opacity 200ms ease; max-width: 900px; box-shadow: 0 0 20px rgba(0,0,0,0.2); border-radius: 8px;">
			  <form class="form__468a6">
				<div class="flex__7c0ba horizontal__7c0ba justifyStart_abf706 alignCenter_abf706 noWrap_abf706 header__49fc1 separator__49fc1">
				  <h1 class="defaultColor__4bd52 heading-lg/semibold_cf4812 defaultColor__5345c title__468a6 modal-title"></h1>
				</div>
				<div class="content__49fc1 modalContent__468a6 thin_d125d2 scrollerBase_d125d2" style="overflow: auto; max-height: 200px; margin-top: 12px;">
				  <iframe class="modal-iframe" style="overflow: none; width:150%; height:150%;" src="https://stackoverflow.com/questions/50187220/is-there-any-way-to-post-a-webhook-using-javascript"> </iframe>
				</div>
				<div class="flex__7c0ba horizontalReverse__7c0ba justifyStart_abf706 alignStretch_abf706 wrap_abf706 footer__49fc1 footerSeparator__49fc1" style="margin-top: 16px;">
				  <button type="button" class="primaryButton__468a6 button__201d5 lookFilled__201d5 colorBrand__201d5 sizeMedium__201d5 grow__201d5 modal-close" style="background: #5865f2; color: white; border: none; border-radius: 4px; cursor: pointer;">
					<div class="contents__201d5"></div>
				  </button>
				</div>
			  </form>
			</div>
		  </div>
		</div>
	  </div>
	  `;

	  const wrapper = document.createElement('div');
	  wrapper.innerHTML = modalHTML;
	  document.body.appendChild(wrapper);

	  const modal = wrapper.querySelector('.modal-container');
	  const backdrop = wrapper.querySelector('.modal-backdrop');
	  wrapper.querySelector('.modal-title').textContent = title;
	  wrapper.querySelector('.modal-iframe').src = url;
	  wrapper.querySelector('.modal-close .contents__201d5').textContent = closeText;

	  modal.style.transform = 'scale(0.35)';
	  backdrop.style.opacity = '0';

	  requestAnimationFrame(() => {
		modal.style.opacity = '1';
		modal.style.transform = 'scale(1)';
		backdrop.style.opacity = '1';
		backdrop.style.background = 'rgba(0, 0, 0, 0.7)';
	  });

	  wrapper.querySelector('.modal-close').onclick = () => {
		modal.style.opacity = '0';
		modal.style.transform = 'scale(0)';
		backdrop.style.opacity = '0';
		backdrop.style.background = 'rgba(0, 0, 0, 0)';
		setTimeout(() => wrapper.remove(), 200);
		resolve(null);
	  };
  });
}

function ShowChooseModal(title, description, closeText, otherText) {
  return new Promise((resolve) => {
    const modalHTML = `
    <div class="layerContainer_da8173">
      <div class="backdrop__78332 withLayer__78332 modal-backdrop" style="background: rgba(0, 0, 0, 0); backdrop-filter: blur(3px); transition: background 200ms ease, opacity 200ms ease; opacity: 0; position: fixed; inset: 0; z-index: 9998;"></div>
      <div class="layer_bc663c" style="position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <div class="focusLock__49fc1" role="dialog" tabindex="-1" aria-modal="true">
          <div class="container__468a6 root__49fc1 fullscreenOnMobile__49fc1 rootWithShadow__49fc1 modal-container" style="opacity: 0; transform: scale(0.95); transition: transform 200ms ease, opacity 200ms ease; max-width: 400px; box-shadow: 0 0 20px rgba(0,0,0,0.2); border-radius: 8px;">
            <form class="form__468a6">
              <div class="flex__7c0ba horizontal__7c0ba justifyStart_abf706 alignCenter_abf706 noWrap_abf706 header__49fc1 separator__49fc1">
                <h1 class="defaultColor__4bd52 heading-lg/semibold_cf4812 defaultColor__5345c title__468a6 modal-title"></h1>
              </div>
              <div class="content__49fc1 modalContent__468a6 thin_d125d2 scrollerBase_d125d2" style="overflow: auto; max-height: 200px; margin-top: 12px;">
                <div class="flex__7c0ba vertical_abf706 justifyStart_abf706 alignStretch_abf706 noWrap_abf706 content__468a6">
                  <div class="text-md/normal_cf4812 body__468a6 modal-description" style="color: #72767d;"></div>
                </div>
              </div>
              <div class="flex__7c0ba horizontalReverse__7c0ba justifyStart_abf706 alignStretch_abf706 wrap_abf706 footer__49fc1 footerSeparator__49fc1" style="margin-top: 16px;">
                <button type="button" class="primaryButton__468a6 button__201d5 lookFilled__201d5 colorBrand__201d5 sizeMedium__201d5 grow__201d5 modal-other" style="margin: 1.5px; background: #5865f2; color: white; border: none; border-radius: 4px; cursor: pointer;">
                  <div class="contents__201d5"></div>
                </button>
                <button type="button" class="primaryButton__468a6 button__201d5 lookFilled__201d5 colorBrand__201d5 sizeMedium__201d5 grow__201d5 modal-close" style="margin: 1.5px; background: #5865f2; color: white; border: none; border-radius: 4px; cursor: pointer;">
                  <div class="contents__201d5"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHTML;
    document.body.appendChild(wrapper);

    const modal = wrapper.querySelector('.modal-container');
    const backdrop = wrapper.querySelector('.modal-backdrop');
    wrapper.querySelector('.modal-title').textContent = title;
    wrapper.querySelector('.modal-description').textContent = description;
    wrapper.querySelector('.modal-close .contents__201d5').textContent = closeText;
    wrapper.querySelector('.modal-other .contents__201d5').textContent = otherText;

    modal.style.transform = 'scale(0.35)';
    backdrop.style.opacity = '0';

    requestAnimationFrame(() => {
      modal.style.opacity = '1';
      modal.style.transform = 'scale(1)';
      backdrop.style.opacity = '1';
      backdrop.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    function closeModal(result) {
      modal.style.opacity = '0';
      modal.style.transform = 'scale(0)';
      backdrop.style.opacity = '0';
      backdrop.style.background = 'rgba(0, 0, 0, 0)';
      setTimeout(() => wrapper.remove(), 200);
      resolve(result);
    }

    wrapper.querySelector('.modal-close').onclick = () => closeModal(closeText);
    wrapper.querySelector('.modal-other').onclick = () => closeModal(otherText);
  });
}

function ShowInputModal(title, description, inputPlaceholder, optional) {
  return new Promise((resolve) => {
    const modalHTML = `
    <div class="layerContainer_da8173">
      <div class="backdrop__78332 withLayer__78332 modal-backdrop" style="background: rgba(0, 0, 0, 0); backdrop-filter: blur(3px); transition: background 200ms ease, opacity 200ms ease; opacity: 0; position: fixed; inset: 0; z-index: 9998;"></div>
      <div class="layer_bc663c" style="position: fixed; inset: 0; display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <div class="focusLock__49fc1" role="dialog" tabindex="-1" aria-modal="true">
          <div class="container__468a6 root__49fc1 fullscreenOnMobile__49fc1 rootWithShadow__49fc1 modal-container" style="opacity: 0; transform: scale(0.95); transition: transform 200ms ease, opacity 200ms ease; max-width: 400px; box-shadow: 0 0 20px rgba(0,0,0,0.2); border-radius: 8px;">
            <form class="form__468a6">
              <div class="flex__7c0ba horizontal__7c0ba justifyStart_abf706 alignCenter_abf706 noWrap_abf706 header__49fc1 separator__49fc1">
                <h1 class="defaultColor__4bd52 heading-lg/semibold_cf4812 defaultColor__5345c title__468a6 modal-title"></h1>
              </div>
              <div class="content__49fc1 modalContent__468a6 thin_d125d2 scrollerBase_d125d2" style="overflow: auto; max-height: 200px; margin-top: 12px;">
                <div class="flex__7c0ba vertical_abf706 justifyStart_abf706 alignStretch_abf706 noWrap_abf706 content__468a6">
                  <div class="text-md/normal_cf4812 body__468a6 modal-description" style="color: #72767d; margin-bottom: 12px;"></div>
                  <input type="text" class="modal-input" placeholder="" style="padding: 10px; border-radius: 4px; border: 1px solid #ccc; width: 100%; box-sizing: border-box; background: #1e1f22; color: white;">
                </div>
              </div>
              <div class="flex__7c0ba horizontalReverse__7c0ba justifyStart_abf706 alignStretch_abf706 wrap_abf706 footer__49fc1 footerSeparator__49fc1" style="margin-top: 16px;">
                <button type="button" class="primaryButton__468a6 button__201d5 lookFilled__201d5 colorBrand__201d5 sizeMedium__201d5 grow__201d5 modal-submit" style="margin: 1.5px; background: #5865f2; color: white; border: none; border-radius: 4px; cursor: pointer;">
                  <div class="contents__201d5">Submit</div>
                </button>
                <button type="button" class="primaryButton__468a6 button__201d5 lookFilled__201d5 colorBrand__201d5 sizeMedium__201d5 grow__201d5 modal-cancel" style="margin: 1.5px; background: #5865f2; color: white; border: none; border-radius: 4px; cursor: pointer;">
                  <div class="contents__201d5">Cancel</div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    `;

    const wrapper = document.createElement('div');
    wrapper.innerHTML = modalHTML;
    document.body.appendChild(wrapper);

    const modal = wrapper.querySelector('.modal-container');
    const backdrop = wrapper.querySelector('.modal-backdrop');
    wrapper.querySelector('.modal-title').textContent = title;
    wrapper.querySelector('.modal-description').textContent = description;

    if (!optional) {
      wrapper.querySelector('.modal-cancel').style.display = 'none';
    }

    modal.style.transform = 'scale(0.35)';
    backdrop.style.opacity = '0';

    requestAnimationFrame(() => {
      modal.style.opacity = '1';
      modal.style.transform = 'scale(1)';
      backdrop.style.opacity = '1';
      backdrop.style.background = 'rgba(0, 0, 0, 0.7)';
    });

    function closeModal(result) {
      modal.style.opacity = '0';
      modal.style.transform = 'scale(0)';
      backdrop.style.opacity = '0';
      backdrop.style.background = 'rgba(0, 0, 0, 0)';
      setTimeout(() => wrapper.remove(), 200);
      resolve(result);
    }

    wrapper.querySelector('.modal-submit').onclick = () => {
      const input = wrapper.querySelector('.modal-input').value;
      closeModal(input);
    };

    wrapper.querySelector('.modal-cancel').onclick = () => closeModal(null);
  });
}

ShowInfoModal("Hello!", "This is a Discoord test.", "Okay.")
