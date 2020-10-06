import { Placeholder, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} [props]           Properties passed from the editor.
 * @param {string} [props.className] Class name generated for the block.
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( {
  attributes,
  className,
  isSelected,
  setAttributes,
} ) {
	return (
    <TextControl
			className={ className }
			value={ attributes.direction }
			onChange={ ( val ) => setAttributes( { direction: val } ) }
		/>
	);
}


/**
 * old stuff

 <div className={ className }>
   { attributes.direction && ! isSelected ? (
     <div className={className}>
       { attributes.direction }
     </div>
   ) : (
     <Placeholder
       label="Template Grid"
       instructions="Do something, will ya."
     >
       <TextControl
         value={ attributes.direction }
         onChange={ ( val ) => setAttributes( { direction: val } ) }
       />
     </Placeholder>
   ) }
</div>

**/
