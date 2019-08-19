export const sendFormEmail = (form) => {
    const url = /localhost/.test(window.location.href) ? 'http://ratanovpro.local/' : '/';
    let formData = new FormData();

    formData.append('action', 'send_email');
    for (var i = 0; i < form.length; ++i) {
      formData.append(form[i].name, form[i].value);
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
      },
      body: formData
    })
    .then(response => response.json())
    .then(response => {
      if (response.data.error != null) alert(response.data.error);
      if (response.data.message != null) {
        alert(response.data.message);
        form.reset();
      }
    })
    .catch(error => alert('Извините, что-то пошло не так :('));
};