import React from 'react';

const Analytics = () => {
    return (
        <div>
            <h1>Analytics page
            document character set includes a wide variety of white space characters. Many of these are typographic elements used in some applications to produce particular visual spacing effects. In HTML, only the following characters are defined as white space characters:

ASCII space (&#x0020;)
ASCII tab (&#x0009;)
ASCII form feed (&#x000C;)
Zero-width space (&#x200B;)
Line breaks are also white space characters. Note that although 
&#x2028; and &#x2029; are defined in [ISO10646] to unambiguously separate lines
 and paragraphs, respectively, these do not constitute line breaks in HTML,
  nor does this specification include them in the more general category of white space characters.

This specification does not indicate the behavior, rendering or otherwise, of 
space characters other than those explicitly identified here as white space characters. 
For this reason, authors should use appropriate elements and styles to achieve visual 
formatting effects that involve white space, rather than space characters.

For all HTML elements except PRE, sequences of white space separate "words" (we use the term "word"
 here to mean "sequences of non-white space characters"). When formatting text, user agents should identify
  these words and lay them out according to the conventions of the particular written language (script) and target medium.

This layout may involve putting space between words (called inter-word space), but conventions for inter-word space vary from script to script. For example, in Latin scripts, inter-word space is typically rendered as an ASCII space (&#x0020;), while in Thai it is a zero-width word separator (&#x200B;). In Japanese and Chinese, inter-word space is not typically rendered at all.

Note that a sequence of white spaces between words in the source document may result in an entirely different rendered inter-word spacing (except in the case of the PRE element). In particular, user agents should collapse input white space sequences when producing output inter-word space. This can and should be done even in the absence of language information (from the lang attribute, the HTTP "Content-Language" header field (see [RFC2616], section 14.12), user agent settings, etc.).

The PRE element is used for preformatted text, where white space is significant.

In order to avoid problems with SGML line break rules and inconsistencies among extant implementations, authors should not rely on user agents to render white space immediately after a start tag or immediately before an end tag. Thus, authors, and in particular authoring tools, should write:

9.2.1 Phrase elements: EM, STRONG, DFN, CODE, SAMP, KBD, VAR, CITE, ABBR, and ACRONYM

Start tag: required, End tag: required

Attributes defined elsewhere

id, class (document-wide identifiers)
lang (language information), dir (text direction)
title (element title)
style (inline style information )
onclick, ondblclick, onmousedown, onmouseup, onmouseover, onmousemove, onmouseout, onkeypress, onkeydown, onkeyup (intrinsic events )
Phrase elements add structural information to text fragments. The usual meanings of phrase elements are following:

EM:
Indicates emphasis.
STRONG:
Indicates stronger emphasis.
CITE:
Contains a citation or a reference to other sources.
DFN:
Indicates that this is the defining instance of the enclosed term.
CODE:
Designates a fragment of computer code.
SAMP:
Designates sample output from programs, scripts, etc.
KBD:
Indicates text to be entered by the user.
VAR:
Indicates an instance of a variable or program argument.
ABBR:
Indicates an abbreviated form (e.g., WWW, HTTP, URI, Mass., etc.).
ACRONYM:
Indicates an acronym (e.g., WAC, radar, etc.).
EM and STRONG are used to indicate emphasis. The other phrase element
s have particular significance in technical documents. These examples illustrate some of the phrase elements:

\
More information can be found in 

Please refer to the following reference number in future
correspondence: 
The presentation of phrase elements depends on the user agent. Generally, visual user agents present EM text in italics and STRONG text in bold font. Speech synthesizer user agents may change the synthesis parameters, such as volume, pitch and rate accordingly.

The ABBR and ACRONYM elements allow authors to clearly indicate occurrences of abbreviations and acronyms. Western languages make extensive use of acronyms such as "GmbH", "NATO", and "F.B.I.", as well as abbreviations like "M.", "Inc.", "et al.", "etc.". Both Chinese and Japanese use analogous abbreviation mechanisms, wherein a long name is referred to subsequently with a subset of the Han characters from the original occurrence. Marking up these constructs provides useful information to user agents and tools such as spell checkers, speech synthesizers, translation systems and search-engine indexers.

The content of the ABBR and ACRONYM elements specifies the abbreviated expression itself, as it would normally appear in running text. The title attribute of these elements may be used to provide the full or expanded form of the expression.

Here are some sample uses of ABBR:
Note that abbreviations and acronyms often have idiosyncratic pronunciations. For example, while "IRS" and "BBC" are typically pronounced letter by letter, "NATO" and "UNESCO" are pronounced phonetically. Still other abbreviated forms (e.g., "URI" and "SQL") are spelled out by some people and pronounced as words by other people. When necessary, authors should use style sheets to specify the pronunciation of an abbreviated form.

9.2.2 Quotations: The BLOCKQUOTE and Q elements
            </h1>
        </div>
    );
};

export default Analytics;