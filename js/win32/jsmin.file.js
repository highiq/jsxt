//
// JScript add-on
//
// @require	jsmin.js
// 		win32/FileSystem.js
// 		Core.js
//
// @copyright	Copyright (c) 2009 by Ildar Shaimordanov
//

if ( Core.browser.isMSIE || Core.browser.isJScript ) {

if ( ! jsmin.file ) {

/**
 * Wrapper over jsmin and FileSystem.readFile to simplify usage from CLI
 *
 * @param	String
 * @param	Integer
 * @param	String
 * @result	String
 *
 * @access	public
 */
jsmin.file = function(filename, level, comment)
{
	var input = FileSystem.readFile(filename);
	return jsmin(input, level, comment);
};

}

}

