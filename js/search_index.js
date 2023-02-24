var search_data = {"index":{"searchIndex":["ankirecord","ankipackage","cardtemplate","collection","deck","deckoptionsgroup","notefield","notetype","sharedconstantshelper","timehelper","allowed_field_names()","closed?()","execute()","milliseconds_since_epoch()","new()","new()","new()","new()","new()","new()","new()","new_card_template()","new_note_field()","open()","open?()","seconds_since_epoch()","zip_and_close()","changelog","code_of_conduct","license","readme"],"longSearchIndex":["ankirecord","ankirecord::ankipackage","ankirecord::cardtemplate","ankirecord::collection","ankirecord::deck","ankirecord::deckoptionsgroup","ankirecord::notefield","ankirecord::notetype","ankirecord::sharedconstantshelper","ankirecord::timehelper","ankirecord::cardtemplate#allowed_field_names()","ankirecord::ankipackage#closed?()","ankirecord::ankipackage#execute()","ankirecord::timehelper#milliseconds_since_epoch()","ankirecord::ankipackage::new()","ankirecord::cardtemplate::new()","ankirecord::collection::new()","ankirecord::deck::new()","ankirecord::deckoptionsgroup::new()","ankirecord::notefield::new()","ankirecord::notetype::new()","ankirecord::notetype#new_card_template()","ankirecord::notetype#new_note_field()","ankirecord::ankipackage::open()","ankirecord::ankipackage#open?()","ankirecord::timehelper#seconds_since_epoch()","ankirecord::ankipackage#zip_and_close()","","","",""],"info":[["AnkiRecord","","AnkiRecord.html","","<p>This module is the namespace for all AnkiRecord classes:\n<p>AnkiPackage\n<p>CardTemplate\n"],["AnkiRecord::AnkiPackage","","AnkiRecord/AnkiPackage.html","","<p>Represents an Anki SQLite3 package/database\n<p>Use ::new to create a new object or ::open to create an object …\n"],["AnkiRecord::CardTemplate","","AnkiRecord/CardTemplate.html","","<p>CardTemplate represents a card template of an Anki note type\n"],["AnkiRecord::Collection","","AnkiRecord/Collection.html","","<p>Collection represents the single record in the Anki database ‘col` table\n"],["AnkiRecord::Deck","","AnkiRecord/Deck.html","","<p>Deck represents an Anki deck\n"],["AnkiRecord::DeckOptionsGroup","","AnkiRecord/DeckOptionsGroup.html","","<p>Represents the set of options that can be applied to a deck\n"],["AnkiRecord::NoteField","","AnkiRecord/NoteField.html","","<p>NoteField represents a field of an Anki note type\n"],["AnkiRecord::NoteType","","AnkiRecord/NoteType.html","","<p>NoteType represents an Anki note type (also called a model)\n"],["AnkiRecord::SharedConstantsHelper","","AnkiRecord/SharedConstantsHelper.html","","<p>Helper module to hold the constants used by multiple classes\n"],["AnkiRecord::TimeHelper","","AnkiRecord/TimeHelper.html","","<p>Helper module to calculate integer time values since the 1970 epoch\n<p>Specifically, the time that has passed …\n"],["allowed_field_names","AnkiRecord::CardTemplate","AnkiRecord/CardTemplate.html#method-i-allowed_field_names","()","<p>Returns the field names that are allowed in the answer format and question format\n<p>These are the field_name …\n"],["closed?","AnkiRecord::AnkiPackage","AnkiRecord/AnkiPackage.html#method-i-closed-3F","()","<p>Returns true if the database is closed\n"],["execute","AnkiRecord::AnkiPackage","AnkiRecord/AnkiPackage.html#method-i-execute","(raw_sql_string)","<p>Executes a raw SQL statement against the *.anki21 database\n<p>Do not use this to execute data definition …\n"],["milliseconds_since_epoch","AnkiRecord::TimeHelper","AnkiRecord/TimeHelper.html#method-i-milliseconds_since_epoch","()","<p>Return the number of milliseconds since the 1970 epoch\n"],["new","AnkiRecord::AnkiPackage","AnkiRecord/AnkiPackage.html#method-c-new","(name:, directory: Dir.pwd)","<p>Creates a new object which represents an Anki SQLite3 database\n<p>This method takes an optional block argument. …\n"],["new","AnkiRecord::CardTemplate","AnkiRecord/CardTemplate.html#method-c-new","(note_type:, name: nil, args: nil)","<p>Instantiates a new card template called <code>name</code> for the given note type\n"],["new","AnkiRecord::Collection","AnkiRecord/Collection.html#method-c-new","(anki_package:)","<p>Instantiates the collection object for the <code>anki_package</code>\n"],["new","AnkiRecord::Deck","AnkiRecord/Deck.html#method-c-new","(collection:, name: nil, args: nil)","<p>Instantiate a new Deck\n"],["new","AnkiRecord::DeckOptionsGroup","AnkiRecord/DeckOptionsGroup.html#method-c-new","(collection:, name: nil, args: nil)","<p>Instantiates a new deck options group called <code>name</code> with defaults\n"],["new","AnkiRecord::NoteField","AnkiRecord/NoteField.html#method-c-new","(note_type:, name: nil, args: nil)","<p>Instantiates a new field for the given note type\n"],["new","AnkiRecord::NoteType","AnkiRecord/NoteType.html#method-c-new","(collection:, name: nil, cloze: false, args: nil)","<p>Instantiates a new note type\n"],["new_card_template","AnkiRecord::NoteType","AnkiRecord/NoteType.html#method-i-new_card_template","(name:)","<p>Create a new card template and adds it to this note type’s templates\n<p>The card template is an instance …\n"],["new_note_field","AnkiRecord::NoteType","AnkiRecord/NoteType.html#method-i-new_note_field","(name:)","<p>Create a new field and adds it to this note type’s fields\n<p>The field is an instance of AnkiRecord::NoteField …\n"],["open","AnkiRecord::AnkiPackage","AnkiRecord/AnkiPackage.html#method-c-open","(path:, create_backup: true)","<p>Creates a new object which represents the Anki SQLite3 database file at <code>path</code>\n<p>Development has focused on …\n"],["open?","AnkiRecord::AnkiPackage","AnkiRecord/AnkiPackage.html#method-i-open-3F","()","<p>Returns true if the database is open\n"],["seconds_since_epoch","AnkiRecord::TimeHelper","AnkiRecord/TimeHelper.html#method-i-seconds_since_epoch","()","<p>Return the number of seconds since the 1970 epoch\n"],["zip_and_close","AnkiRecord::AnkiPackage","AnkiRecord/AnkiPackage.html#method-i-zip_and_close","()","<p>Zips the temporary files into the *.apkg package and deletes the temporary files.\n"],["CHANGELOG","","CHANGELOG_md.html","","<p>[Development started] - 02-02-2023\n<p>[Unreleased/0.1.0] - 02-22-2023\n<p>First version that can be used to create …\n"],["CODE_OF_CONDUCT","","CODE_OF_CONDUCT_md.html","","<p>Contributor Covenant Code of Conduct\n<p>Our Pledge\n<p>We as members, contributors, and leaders pledge to make …\n"],["LICENSE","","LICENSE_txt.html","","<p>The MIT License (MIT)\n<p>Copyright © 2023 Kyle Rego\n<p>Permission is hereby granted, free of charge, to any …\n"],["README","","README_md.html","","<p>AnkiRecord\n<p>AnkiRecord provides an interface to Anki SQLite databases through the Ruby programming language. …\n"]]}}