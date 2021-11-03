<?php

namespace Mirovit\NovaNotifications\Contracts;

interface NovaNotificationContract
{
    public static function make(string $title = null, string $content = null);
}
