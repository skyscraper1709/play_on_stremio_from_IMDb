if(jQuery) {
  let imdb_id = jQuery("meta[property='imdb:pageConst']")?.attr('content');
  if(imdb_id) {
    let title = 'span.hero__primary-text';
    let link_web = 'https://web.stremio.com/#/search?search=' + imdb_id;
    let link_app = 'stremio://detail/movie/' + imdb_id + '/';
    let anchor_web = `<a href='${link_web}' target='blank' class='ipc-chip ipc-chip--on-baseAlt'>Play</a>`;
    let anchor_app = `<a href='${link_app}' target='blank' class='ipc-chip ipc-chip--on-baseAlt'>Play on App</a>`;
    jQuery(anchor_app).insertAfter(title);
    jQuery(anchor_web).insertAfter(title);

  } else {
    console.log('IMDB ID MISSING!');
  }
} else {
  console.log('Extension jQ missing!!!');
}
