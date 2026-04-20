<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Grillzilla',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'bootstrap_package' => '15.0.0-15.99.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Fhooe\\Grillzilla\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'David Schleimer',
    'author_email' => 's2410456028@fhooe.at',
    'author_company' => 'fhooe',
    'version' => '1.0.0',
];
