<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <meta name="robots" content="all,follow">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script type="text/javascript">
            // window.Laravel = { csrfToken: '{{ csrf_token() }}'};
        </script>
        <title>Dashboard</title>

        <!-- JK User Custom Final CSS -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css" media="all" />
        <!-- JK Dashboard CSS -->
        <link href="{{ asset('css/admin/font-awesome.min.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('css/admin/fontastic.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('css/admin/grasp_mobile_progress_circle-1.0.0.min.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('css/admin/jquery.mCustomScrollbar.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('css/admin/style.blue.css') }}" rel="stylesheet" type="text/css" media="all" />
    </head>
    <body>
        <!-- Page Content -->
        @yield('page_content')
        <!-- Page Content -->
        <!-- js -->
        <script src="{{ mix('js/admin.js') }}" ></script>
    </body>
</html>
