<?php

namespace Botble\SocialLogin\Http\Requests;

use Botble\Support\Http\Requests\Request;

class FacebookDataDeletionRequestCallbackRequest extends Request
{
    public function rules(): array
    {
        return [
            'signed_request' => ['required', 'string'],
        ];
    }
}
