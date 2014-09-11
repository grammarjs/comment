
/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Add comment support to grammar
 */

function plugin(opts) {
  return function(grammar){
    var rule = grammar.rule;

    rule('comment')
      .match(
        ':comment.multiline')
      .match(
        ':comment.singleline');

    rule('comment.multiline')
      .match(
        ':comment.block.begin',
        ':comment.multiline.body*',
        ':comment.block.end');

    rule('comment.multiline.body')
      .match(
        '!:comment.block.end',
        ':character.source')

    rule('comment.multiline.no-line-terminator')
      .match(
        ':comment.block.begin',
        ':comment.multiline.no-line-terminator.body*',
        ':comment.block.end');

    rule('comment.multiline.no-line-terminator.body')
      .match(
        '!:comment.multiline.no-line-terminator.body.not',
        ':character.source');

    rule('comment.multiline.no-line-terminator.body.not')
      .match(
        ':comment.block.end')
      .match(
        ':whitespace.line.end');

    rule('comment.singleline')
      .match(
        '//',
        ':comment.singleline.body*');

    rule('comment.singleline.body')
      .match(
        '!:whitespace.line.terminator',
        ':character.source');

    rule('comment.block.begin')
      .match(
        '/*');

    rule('comment.block.end')
      .match(
        '*/');
  };
}