<?php

namespace Botble\JobBoard\Repositories\Caches;

use Botble\JobBoard\Repositories\Interfaces\AnalyticsInterface;
use Botble\Support\Repositories\Caches\CacheAbstractDecorator;
use Illuminate\Database\Eloquent\Collection;

class AnalyticsCacheDecorator extends CacheAbstractDecorator implements AnalyticsInterface
{
    public function getReferrers(int|string $jobId, int $limit = 10)
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    public function getViews(int|string $jobId): int
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    public function getTodayViews(int|string $jobId): int
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }

    public function getCountriesViews(int|string $jobId): Collection
    {
        return $this->getDataIfExistCache(__FUNCTION__, func_get_args());
    }
}
